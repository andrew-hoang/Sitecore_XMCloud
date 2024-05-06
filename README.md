# ACR - Sitecore_XMCloud

# Setup

## Next.js

1. project folder is found here `cd src/acr`
2. Follow the [Read Me](src/acr/README.md) there to spin up your Next.js/Storybook instance.

## XM Cloud Local Environment Setup
1. Ensure Docker is running using Windows containers
2. In an Admin Terminal run the following command, providing the path to your license file and desired admin password:
	
	```.\init.ps1 -InitEnv -LicenseXmlPath "C:\path\to\license.xml"-AdminPassword "DesiredAdminPassword"```
3. Restart your terminal and run ```.\up.ps1```
4. Confirm and Authenticate in browser when prompted 

## Connecting app to Experience Edge
1. Copy the file `src\acr\.env.local.example` and name it `src\acr\.env.local`
2. Populate the following variables with the values respective to which environment you wish to connect to:

   ### Connecting to Local Sitecore Instance via EdgePreview
   GRAPH_QL_ENDPOINT=`https://acr.xmcloudcm.localhost/sitecore/api/graph/edge`
   
   SITECORE_API_KEY={ID of Item at following path: `/sitecore/system/Settings/Services/API Keys/xmcloudpreview`}

   SITECORE_SITE_NAME="ACR"
   
   ### Connecting to Dev Environment via ExperienceEdge
   GRAPH_QL_ENDPOINT=`https://edge.sitecorecloud.io/api/graphql/v1`
   
   SITECORE_API_KEY={Go [Here](https://xmapps.sitecorecloud.io/sites/ACR/developersettings?tenantName=americancol5d03-acrorge141-devb5f5&organization=org_aFtTCG5FWLO7UlKa&view=tiles) and click Generate Api Key under the SITECORE_API_KEY}

   SITECORE_SITE_NAME="ACR"

## Sitecore CLI

- In the terminal run `dotnet tool restore`

### Requirements

1. .net 6.0 - https://dotnet.microsoft.com/en-us/download/dotnet/6.0
