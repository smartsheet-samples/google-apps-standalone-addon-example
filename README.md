# Google Apps Add-on Example for Smartsheet
This is an example of using [Google Apps Standalone Scripts](https://developers.google.com/apps-script/guides/standalone) to create a Google Apps Add-On that uses the [Smartsheet API](http://smartsheet-platform.github.io/api-docs/). This example Add-on Works with Google Sheets but the concepts should be easily transferable to Google Docs or Forms (and hopefully other Google Apps in the future).

# How to use this project
You can use this project as a template for creating your own Google Apps Add-on that uses the Smartsheet API. Basically this project shows you how to walk your user through an OAuth authentication process with the Smartsheet API and make a simple API call. The API call demonstrated simply gets information about the current user logged into Smartsheet's API. Once authenticated the add-on is ready to access the other resources and actions in the Smartsheet API.

# Getting Started
1. Install [node-google-apps-script](https://www.npmjs.com/package/node-google-apps-script#12-independent-developer-console-project) using `npm install -g node-google-apps-script`
    1. NOTE: The `gapps` package requires at least node 0.12.
1. 1. Follow [these steps to initialize node-google-apps-script](https://www.npmjs.com/package/node-google-apps-script#quickstart).  
    1. In following these steps create **A new Apps Script project**.
1. After succesfully completing the `gapps auth` and `gapps init <fileId>` steps in the process from the prior step, run `gapps upload` to upload to upload this project into your newly created Google Apps Script project.
1. Then, from within the project viewer in your browser (at https://script.google.com...), select **Publish > Deploy as web app**
1. Using the script's current web app URL, go to Smartsheet to create a [Third Party App](http://smartsheet-platform.github.io/api-docs/#third-party-app-development). Use the App Script current web app URL as the value for the Redirect URL in the Third Party App. Once completed, you will be given a Client ID and Client Secret. Add those values to `/src/server/smartsheet_client_secret.js`.
1. Then, back in the Google Apps Script project viewer in your browser (at https://script.google.com...), select **Publish >
 Test as add-on** from the menu.
1. Use the following values in the *Configure New Test* window.
    1. *SELECT VERSION: Test with latest code*
    1. *INSTALLATION CONFIGURATION: Installed for current user*
    1. *Select doc*, find the Doc you want to run the project on, and click *Save*.
1. From the newly created entry at the top under *Execute Saved Test*, select **Test** to open the doc.
1. Choose **Add-ons > gapps-standalone-smartsheet-addon > Show sidebar**.
1. Click the login button in the sidebar and choose *Allow* from the authorization page and then close the tab. Now you should see your email address and a list of sheets which were the result of two successful API calls to the smartsheet API.



# Tools Used
The example relies on the following tools:

* [node-google-apps-script](https://www.npmjs.com/package/node-google-apps-script#12-independent-developer-console-project) to enable developing locally using your favorite editor and local dev tools. A good introduction to this tool is [Matt Hessinger's blog post Advanced development process with apps](https://developers.googleblog.com/2015/12/advanced-development-process-with-apps.html).
* [apps-script-oauth2](https://github.com/googlesamples/apps-script-oauth2) for enabling OAuth to the Smartsheet API.

# Additional Notes
* You can test your add-on using the steps described at https://developers.google.com/apps-script/add-ons/test
