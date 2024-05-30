const styles = `
  atomic-search-box::part(wrapper) {
    background-color: var(--c-white);
    border-radius: 8px;
  }
  
  atomic-search-box::part(input) {
    background-color: var(--c-white);
    height: 56px;
    border-radius: 8px;
  }

  atomic-search-box::part(submit-button) {
    background-color: var(--c-indigo);
    color: var(--c-white);
    border-radius: 100%;
    width: 24px;
    height: 24px;
    margin-block: auto;
    margin-inline-end: 15px;
  }

  atomic-search-box::part(submit-icon) {
    width: 13px;
    height: 13px;
  }

  atomic-search-box::part(suggestions-wrapper) {
    --atomic-font-family: var(--font-sans);
    background-color: white;
    border-radius: 0 0 8px 8px;
    top: 92%;
  }

  atomic-search-box::part(query-suggestion-text) {
    --atomic-font-family: var(--font-sans);
  }

  atomic-search-box::part(query-suggestion-icon) {
    display: none;
  }
`;

export default styles;
