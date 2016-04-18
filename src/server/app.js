
/** 
 * Calls the Smartsheet API using the specified URL and options.
 * Authentication from the current user's OAuth access token is automatically used.
 * @param {string} url The url to call.
 * @param {object} options Options compatible with URLFetchApp.fetch. See https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetchurl-params
 * @return {object} Parsed JSON result of the response. 
 */
function callSmartsheet(url, options) {
  var localOptions = {
    'method': 'get'
    , 'headers': {'Authorization': 'Bearer ' + getSmartsheetAccessToken() }
  };
  localOptions = _.extend(localOptions, options);
  var response = UrlFetchApp.fetch(url, localOptions).getContentText(); 
  return JSON.parse(response);
}

/**
 * An example of making a call to the Smartsheet API.
 * In this case, gets information about the currently logged in user to Smartsheet. See http://smartsheet-platform.github.io/api-docs/#get-current-user 
 */
function getSmartsheetUser() {
  var url = 'https://api.smartsheet.com/2.0/users/me';
  return callSmartsheet(url);
}

function getSheets() {
  var url = 'https://api.smartsheet.com/2.0/sheets?includeAll=true';
  return callSmartsheet(url);
}

function getSheet(sheetId) {
  var url = 'https://api.smartsheet.com/2.0/sheets/' + sheetId;
  return callSmartsheet(url);
}
