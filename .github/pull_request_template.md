## Summary

\*Provide the business case for adding this feature work. (Explain in layman terms)

[ACRAR-<###>](https://velir.atlassian.net/browse/ACRAR-<###>)

[Figma Designs](https://www.figma.com/file/g1cA0qij8hlws9Ffn6xpcU/ACR?type=design&node-id=342-3645&mode=design&t=pYIKXVL7HZ0IyyWA-0)

## Test Page
[Link to test page](https://example.com)
- [ ] For Reviewer - Smoke test local designs from test page to figma designs

## Lighthouse Scores

\* Provide a screenshot of your lighthouse score
\* How to record your lighthouse score?
  \* You can use the chrome extension `Lighthouse` under the dev tools tab
  \* You can use this CLI command. Make sure to replace `<URL>` with the URL to your test page. Additional notes, you can replace the `--preset` value with mobile. `npx  lighthouse <URL> --preset=desktop   --view     --throttling-method=simulate   --throttling.rttMs=20 --throttling.throughputKbps=2000 --throttling.requestLatencyMs=100 --throttling.downloadThroughputKbps=2000 --throttling.uploadThroughputKbps=2000 --throttling.cpuSlowdownMultiplier=2`

## Checklists

### General

- [ ] Wrote, updated, and/or passed Jest Unit tests (ran `npm run check-all` or `npm run test`)
- [ ] Verified related functionality/components did not break
- [ ] Verified this in Storybook (ran `npm run storybook:prebuild` or equivalent)
- [ ] Verified this in Next.js (ran `npm run check-all` or `npm run build`)
- [ ] Related dependencies have been included
- [ ] Removed unused/redundant code

### Front-End

- [ ] Verified accuracy against design in a (pseudo-)page context (using Storybook or `npm run start:connected` proxy)
- [ ] Tested accessibility - automated (aXe, storybook accessibility tab, etc)
- [ ] Tested accessibility - manual keyboard test
- [ ] Tested accessibility - manual screenreader test (Voice Over, NVDA, JAWS, etc)
- [ ] Address and remove TODO_SCAFFOLD_FE

### Back-End

- [ ] Address and remove TODO_SCAFFOLD_BE
- [ ] Verified that serialized Sitecore items are included

## Screenshots

\*Provide screenshots for any UI changes if applicable (Before vs. After)