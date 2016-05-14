# Google Apps Add-on Example for Smartsheet
This is an example of using [Google Apps Standalone Scripts](https://developers.google.com/apps-script/guides/standalone) to create a Google Apps Add-On that uses the [Smartsheet API](http://smartsheet-platform.github.io/api-docs/). This example Add-on works with Google Sheets but the concepts should be easily transferable to Google Docs or Forms (and hopefully other Google Apps in the future).

# How to use this project
You can use this project as a template for creating your own Google Apps Add-on that uses the [Smartsheet API](http://smartsheet-platform.github.io/api-docs/). Basically this project shows you how to walk your user through an OAuth authorization process with the [Smartsheet API](http://smartsheet-platform.github.io/api-docs/) and make a simple API call. The API call demonstrated simply gets information about the current user logged into Smartsheet's API. Once authenticated the add-on is ready to access the other resources and actions in the [Smartsheet API](http://smartsheet-platform.github.io/api-docs/).

# Getting Started
1. Install [gapps](https://www.npmjs.com/package/node-google-apps-script#12-independent-developer-console-project) using `npm install -g node-google-apps-script`
    1. NOTE: The `gapps` package requires at least node 0.12.
1. 1. Follow [these steps to initialize node-google-apps-script](https://www.npmjs.com/package/node-google-apps-script#quickstart).  
    1. In following these steps create **A new Apps Script project**.
1. After successfully completing the `gapps auth` and `gapps init <fileId>` steps in the process from the prior step, run `gapps upload` to upload to upload this project into your newly created Google Apps Script project.

1. Next, you will create a [Third Party App](http://smartsheet-platform.github.io/api-docs/#third-party-app-development) in Smartsheet.
    1. The Redirect URL will be `https://script.google.com/macros/d/{PROJECT_KEY}/usercallback`. The `{PROJECT_KEY}` can be found in your Google Apps Script code editor by navigating to `File > Project Properties`.
Once the Third Party App is registered, you will be given a Client ID and Client Secret. Add those values to `/src/server/smartsheet_client_secret.js`.
1. Then, back in the Google Apps Script project viewer in your browser (at https://script.google.com...), select **Publish >
 Test as add-on** from the menu.
1. Use the following values in the *Configure New Test* window.
    1. *SELECT VERSION: Test with latest code*
    1. *INSTALLATION CONFIGURATION: Installed for current user*
    1. *Select doc*, find the Google Sheet (this example only works with Google Sheets) you want to run the project on, and click *Save*.
1. From the newly created entry at the top under *Execute Saved Test*, select **Test** to open the doc.
1. Choose **Add-ons > gapps-standalone-smartsheet-addon > Show sidebar**.
1. Click the login button in the sidebar and choose *Allow* from the authorization page and then close the tab. Now you should see your email address and a list of sheets which were the result of two successful API calls to the smartsheet API.



# Tools Used
The example relies on the following tools:

* [gapps](https://www.npmjs.com/package/node-google-apps-script#12-independent-developer-console-project) -- npm package that enables local develop of Google Apps Script using your favorite editor and local dev tools. A good introduction to this tool is [Matt Hessinger's blog post Advanced development process with apps](https://developers.googleblog.com/2015/12/advanced-development-process-with-apps.html).
* [OAuth2 for Apps Script](https://github.com/googlesamples/apps-script-oauth2) -- Google's library for enabling OAuth to the Smartsheet API.

# Additional Notes
* You can test your add-on using the steps described at https://developers.google.com/apps-script/add-ons/test

# License

Copyright 2016 [Smartsheet, Inc.](https://www.smartsheet.com)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
