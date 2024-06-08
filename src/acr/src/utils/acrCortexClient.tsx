import { CaseInPointItem } from 'src/types/Cortex/CaseInPointItem.props';
import axios from 'axios';
const apiUrl = 'https://cortexuat.acr.org/WebAPI/CiPUtility/GetPublishedCaseData/';
const apiKey = '78a0b86257cd437c8b94b6159e4d793c';

export const getCortexData = async (): Promise<CaseInPointItem> => {
  try {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    const response = await axios.get(`${apiUrl}/${formattedDate}/${apiKey}`);
    if (response.status === 200) {
      const tokenResponse: CaseInPointItem = {
        caseId: response.data.caseId,
        history: response.data.expires_in,
        publishDate: response.data.publishDate,
        url: response.data.url,
        imageUrl: response.data.imageUrl,
      };
      return tokenResponse;
    } else {
      throw new Error(`Error in request getCortexData ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error while getting Cortex Data: ${error}`);
  }
};
