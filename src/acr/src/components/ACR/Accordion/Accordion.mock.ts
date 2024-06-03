
import { AccordionProps,AccordionRowProps} from './Accordion.props';

export const defaultMockData: AccordionProps = {
  name: 'Accordian',
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Accordion',
    dataSource: '/',
    placeholders: {
      'acr-accordian-{*}': [
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'AccordionRow',
          dataSource: '/',
          
          fields: {
            title: { value: 'Mock Row Title 1' },
            content: { value: '<p>Mock content for row 1</p>' },
          },
        },
        {
          uid: '{00000000-0000-0000-0000-000000000000}',
          componentName: 'AccordionRow',
          dataSource: '/',
         
          fields: {
            title: { value: 'Mock Row Title 2' },
            content: { value: '<p>Mock content for row 2</p>' },
          },
        },
       
      ],
    },
  },
  fields: {
    title: { value: 'Mock Accordion Title' } ,
    titleHighlight: { value: 'Mock Highlight Title' } ,
    description: { value: 'Mock description for the accordion.' } ,
    link: {
      value: {
        href: '/mock-link',
        text: 'Mock Link',
        target: '_blank',
      },
    } ,
    accentImage: {
      value: {
        src: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
        alt: 'Mock Image',
        width: '100',
        height: '100'
      },
    } ,
  },
  items: [],
};


export const defaultRowMockData:AccordionRowProps={
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'AccordianRow',
    dataSource: '/',
  },
  fields: {
    title: { value: 'MOCK_DATA_HEADING' },
    content : { value: 'Mock data row description' },
  },
};