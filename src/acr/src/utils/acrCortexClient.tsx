import { CaseInPointItem } from 'src/types/Cortex/CaseInPointItem.props';
import axios from 'axios';
const apiUrl = 'https://cortexuat.acr.org/WebAPI/CiPUtility/GetPublishedCaseData/';
const apiKey = '78a0b86257cd437c8b94b6159e4d793c';

export const getCortexData = async (): Promise<CaseInPointItem> => {
  try {

    const date = new Date();
        let formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

      // Adjust date for Saturday and Sunday
      if (date.getDay() === 6) {
        date.setDate(date.getDate() - 1);
        formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      } else if (date.getDay() === 0) {
        date.setDate(date.getDate() - 2);
        formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      }

    //This is test date which has data
     formattedDate = '2019-05-14'; 

    const response = await axios.get(`${apiUrl}/${formattedDate}/${apiKey}`);

    if (response.status === 200) {
      if(!response.data.ErrorMessage){
        const tokenResponse: CaseInPointItem = {
          caseId: response.data.CaseId,
          history: response.data.History,
          publishDate: response.data.PublishDate,
          url: response.data.Url,
          imageUrl: response.data.ImageUrl,
        };
        return tokenResponse;
      }
      else{
        throw new Error(`${response.data.ErrorMessage}`);
    }
    } else {
      throw new Error(`Error in request getCortexData ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error while getting Cortex Data: ${error}`);
  }
};
