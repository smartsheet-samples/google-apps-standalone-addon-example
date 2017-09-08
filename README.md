# Google Apps Add-on Example for Smartsheet
This is an example of using [Google Apps Standalone Scripts](https://developers.google.com/apps-script/guides/standalone) to create a Google Apps Add-On that uses the [Smartsheet API](http://smartsheet-platform.github.io/api-docs/). This example Add-on works with Google Sheets but the concepts should be easily transferable to Google Docs or Forms (and hopefully other Google Apps in the future).

# How to use this project
You can use this project as a template for creating your own Google Apps Add-on that uses the [Smartsheet API](http://smartsheet-platform.github.io/api-docs/). Basically this project shows you how to walk your user through an OAuth authorization process with the [Smartsheet API](http://smartsheet-platform.github.io/api-docs/) and make a simple API call. The API call demonstrated simply gets information about the current user logged into Smartsheet's API. Once authenticated the add-on is ready to access the other resources and actions in the [Smartsheet API](http://smartsheet-platform.github.io/api-docs/).

# Getting Started
1. Install [gas](https://www.npmjs.com/package/google-apps-script) using `npm install -g google-apps-script`
1. Follow instructions for [authenticating and using gas](https://github.com/maartendesnouck/google-apps-script#usage)

# Tools Used
The example relies on the following tools:

* [gas](https://www.npmjs.com/package/google-apps-script) -- npm package for locally developer Google Apps Script projects.
* [OAuth2 for Apps Script](https://github.com/googlesamples/apps-script-oauth2) -- Google's library for enabling OAuth to the Smartsheet API.

# Additional Notes
* You can test your add-on using the steps described at https://developers.google.com/apps-script/add-ons/test

# License

Copyright 2017 [Smartsheet, Inc.](https://www.smartsheet.com)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
