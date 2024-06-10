import { RichTextProps } from './RichText.props';

export const defaultMockData: RichTextProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'RichText',
    dataSource: '/',
  },
  fields: {
    text1: {
      value:
        '<h1>My heading 1</h1><h2>My heading 2</h2><h3>My heading 3</h3><h4>My heading 4</h4><button class="rte-button"><span>Explore Activities</span></button><br/><a href="/" class="rte-link"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="14.5" stroke="currentColor"></circle><path fill="currentColor" d="M18.1313 15.75H9v-1.5h9.1313l-4.2-4.2L15 9l6 6-6 6-1.0687-1.05 4.2-4.2Z"></path></svg><span class="link-underline">Learn More</span></a><p>Have you heard? We’re opening up a brand new Suncoast branch at The Loop, a shopping center in Kissimmee!</p > <p>The great thing about having a branch in a shopping center is the convenience it brings to our members.Whether you’re out for a day of shopping, looking for a new spot to eat, or just running errands, here are a few things The Loop has to offer to add some fun to your bank run.</p><br />',
    },
    text2: { value: '' },
  },
};

export const summaryRTE: RichTextProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'RichText',
    dataSource: '/',
  },
  fields: {
    text1: {
      value:
        "<div><p class='summary-title'>summary</p><p class='summary-content'>Multiple groups are concerned that the U.S. Department of Health and human Services' (HHS) extended closure of the arbitration process could lead to unintended consequences and delays in resolving billing disputes between providers and insurers, ultimately impacting patients.</p></div>",
    },
    text2: { value: '' },
  },
};

export const quoteRTE: RichTextProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'RichText',
    dataSource: '/',
  },
  fields: {
    text1: {
      value:
        "<div><q class='quotes'><p class='quote-content'>It's the opportunity to combine research with your clinical care -- and education as well.</p></q><p class='quote-author'>Jadranka Stojanovaska, MD</p><p class='quote-author-title'>Diagnostic Radiologist</p><p class='quote-author-university'>Emory University</p></div>",
    },
    text2: { value: '' },
  },
};

export const imageRTE: RichTextProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'RichText',
    dataSource: '/',
  },
  fields: {
    text1: {
      value:
        "<img class='rte-image' src='./rte-mock-image.png' alt='rte image' width='370px' height='66px' />",
    },
    text2: { value: '' },
  },
};

export const twoColumnRTE: RichTextProps = {
  ...defaultMockData,
  fields: {
    text1: {
      value:
        '<ul><li>All full-time public and private school employees (K-12, Post-secondary)<ul><li>Level 2<ul><li>Level 3</li></ul></li></ul></li><li>Active military, National Guard and reservists</li><li>Spouses of military members who lost their lives during active service</li><li>Veterans</li><li>Physicians, nurses, paramedics and EMTs</li><li>All public law enforcement employees</li></ul>',
    },
    text2: {
      value:
        '<ul><li>All fire department employees</li><li>Save money with no origination fee and no private mortgage insurance (PMI)</li><li>Low down payment required with up to 95% financing†</li><li>Choose terms that are right for you: 30, 20, 15, 10 year fixed rate options or 3/3 and 7/1 adjustable rate options</li><li>Reduce or payoff existing debt or expenses at a lower rate†† by refinancing your current mortgage</li></ul>',
    },
  },
};
