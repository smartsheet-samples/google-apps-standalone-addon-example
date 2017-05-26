
  var Method = {
    GET : 'GET',
    POST: 'POST',
    PUT : 'PUT',
    DELETE : 'DELETE'
  };
/** 
 * Calls the Smartsheet API using the specified URL and options.
 * Authentication from the current user's OAuth access token is automatically used.
 * @param {string} url The url to call.
 * @param {object} options Options compatible with URLFetchApp.fetch. See https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetchurl-params
 * @return {object} Parsed JSON result of the response. 
 */
function callSmartsheet(endpoint, method, options) {
  var localOptions = {
    'method':  method ? method : Method.GET,
    'contentType': 'application/json',
    'headers': {'Authorization': 'Bearer ' + getSmartsheetAccessToken() }
  };
  localOptions = _.extend(localOptions, options);
  var smartsheetAPI = 'https://api.smartsheet.com/2.0/';
  var url = smartsheetAPI + endpoint;
  var response = UrlFetchApp.fetch(url, localOptions).getContentText(); 
  return JSON.parse(response);
}

/**
 * An example of making a call to the Smartsheet API.
 * In this case, gets information about the currently logged in user to Smartsheet. See http://smartsheet-platform.github.io/api-docs/#get-current-user 
 */
function getSmartsheetUser() {
  var endpoint = 'users/me';
  return callSmartsheet(endpoint);
}

function getSheets() {
  var endpoint = 'sheets?includeAll=true';
  return callSmartsheet(endpoint);
}

function getSheet(sheetId) {
  var endpoint = 'sheets/' + sheetId;
  return callSmartsheet(endpoint);
}

function createSheet() {
    var columns = [
      {
        "title": "Text Column",
        "type": "TEXT_NUMBER",
        "primary": true
      },
      {
        "title": "Date Column",
        "type": "DATE"
      },
      {
        "title": "Picklist Column",
        "type": "PICKLIST",
        "options": [
          "Plane",
          "Train",
          "Automobile"
        ]
      }
    ];
    var body = {
      "name": "Google Apps Script Sheet",
      "columns": columns,
    };
    var options = {
      payload: JSON.stringify(body)
    };

    return callSmartsheet("sheets", Method.POST, options);  
  }  
