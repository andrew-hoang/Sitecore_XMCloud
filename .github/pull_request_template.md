## Summary

<!-- Provide the business case for adding this feature work. (Explain in layman terms) -->

[ACRAR-<###>](https://velir.atlassian.net/browse/ACRAR-<###>)

[Figma Designs](https://www.figma.com/file/g1cA0qij8hlws9Ffn6xpcU/ACR?type=design&node-id=342-3645&mode=design&t=pYIKXVL7HZ0IyyWA-0)

[Link to test page](https://example.com)

## Lighthouse Scores

<!-- Provide a screenshot of your lighthouse score -->
<!-- How to record your lighthouse score? -->
  <!-- You can use the chrome extension `Lighthouse` under the dev tools tab -->
  <!-- You can use this CLI command. Make sure to replace `<URL>` with the URL to your test page. Additional notes, you can replace the `--preset` value with mobile for mobile test results. `npm run lighthouse <URL> -- --preset=desktop` -->

## Checklists

### General

- [ ] Wrote, updated, and/or passed Jest Unit tests (ran `npm run check-all` or `npm run test`)
- [ ] Verified related functionality/components did not break
- [ ] Verified this in Storybook (ran `npm run storybook:prebuild` or equivalent)
- [ ] Verified this in Next.js (ran `npm run check-all` or `npm run build`)
- [ ] Related dependencies have been included
- [ ] Removed unused/redundant code

### Front-End

- [ ] Verified accuracy against design in a (pseudo-)page context (`npm run start:connected` proxy)
- [ ] Tested accessibility - automated (aXe, storybook accessibility tab, etc)
- [ ] Tested accessibility - manual keyboard test
- [ ] Tested accessibility - manual screenreader test (Voice Over, NVDA, JAWS, etc)
- [ ] Address and remove TODO_SCAFFOLD_FE

### Back-End

- [ ] Address and remove TODO_SCAFFOLD_BE
- [ ] Verified that serialized Sitecore items are included

### Reviewer

- [ ] Verified accuracy against design in a test page created in XM Cloud.
- [ ] Review field types for the component between the [Jira Ticket](https://velir.atlassian.net/browse/ACRAR-<###>) and the Code (fields) or XM Cloud.
- [ ] Review files changed (Start a Review in Github).
- [ ] Test designs at different breakpoints.
- [ ] Test component in Storybook with different control values.

## Screenshots

<!-- Provide screenshots for any UI changes if applicable (Before vs. After) -->
