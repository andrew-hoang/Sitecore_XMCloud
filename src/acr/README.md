# Sitecore JSS Next.js Sample Application

[Documentation (Experience Platform)](https://doc.sitecore.com/xp/en/developers/hd/21/sitecore-headless-development/sitecore-javascript-rendering-sdk--jss--for-next-js.html)

[Documentation (XM Cloud)](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-javascript-rendering-sdk--jss--for-next-js.html)

## Frontend Development

### Tech Stack

- XM Cloud (Headless CMS)
- Typescript
- NextJS
- Tailwind
- Radix UI/Themes

### Getting started

1. Install version 20 of node from https://nodejs.org/
2. You should be able to run the following command after the installation procedure below.

```
$ node --version
v20.12.2

$ npm --version
10.5.0
```

3. Run `npm install`

4. Run `npm run storybook` and navigate to http://localhost:6006/

#### Build Error

On initial set up you may run into this error `Error: Cannot find module './src/temp/config'`. Running `npm run build` will resolve that.

### File Structure

All files pertaining to core development will be found under /src

#### Components

Components all live under src/components/ACR, where you will find the main frontend component that's hooked to Sitecore, an reusable "Base" component to be consumed by other components (if needed), stories, mock data, data/ui integrations, and any other component assets.

### Scaffolding

This project comes with a unique script that enables scaffolding a new JSS component using `npm run scaffold <ComponentName>`.

The default naming convention is that component names must start with a capital letter, and can contain
letters, number, underscores, or dashes.

If the <ComponentName> parameter includes a path, it must be relative to the src/components folder.
For example, `npm run scaffold search/SearchBox` will create a component called `SearchBox` in
`src/components/search/SearchBox.tsx`. Specifying a relative path is optional,
and just providing the name is ok.

This script generates the following files

- Generate Base and Feature component
- Generate Storybook file with mockdata
- Generate mock data file
- Generate props file
- Generate test file
- Generate utils file

### Running connected:mode

To run the project locally against a running Sitecore instance, you can use `npm run start:connected`, which allows you to proxy an instance and retrieve live data from Sitecore.

Ensure that you have your variables set up in your local environment file, for which values you can get through the XM Cloud Deploy App.

