# Google Apps Add-on Example for Smartsheet
This is an example of using [Google Apps Standalone Scripts](https://developers.google.com/apps-script/guides/standalone) to create a Google Apps Add-On that uses the [Smartsheet API](http://smartsheet-platform.github.io/api-docs/). This example Add-on Works with Google Sheets but the concepts should be easily transferable to Google Docs or Forms (and hopefully other Google Apps in the future).

# How to use this project
You can use this project as a template for creating your own Google Apps Add-on that uses the Smartsheet API. Basically this project shows you how to walk your user through an OAuth authentication process with the Smartsheet API and make a simple API call. The API call demonstrated simply gets information about the current user logged into Smartsheet's API. Once authenticated the add-on is ready to access the other resources and actions in the Smartsheet API.

# Tools Used
The example relies on the following tools:

* [node-google-apps-script](https://www.npmjs.com/package/node-google-apps-script#12-independent-developer-console-project) to enable developing locally using your favorite editor and local dev tools. A good introduction to this tool is [Matt Hessinger's blog post Advanced development process with apps](https://developers.googleblog.com/2015/12/advanced-development-process-with-apps.html).
* [apps-script-oauth2](https://github.com/googlesamples/apps-script-oauth2) for enabling OAuth to the Smartsheet API.

# Additional Notes
* You can test your add-on using the steps described at https://developers.google.com/apps-script/add-ons/test
