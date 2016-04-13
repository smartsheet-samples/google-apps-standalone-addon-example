/**
 * An example of making a call to the Smartsheet API.
 * In this case, gets information about the currently logged in user to Smartsheet. See http://smartsheet-platform.github.io/api-docs/#get-current-user 
 */
function getSmartsheetUser() {
  var url = 'https://api.smartsheet.com/2.0/users/me';
  var options = {
    'method': 'get'
    , 'headers': {'Authorization': 'Bearer ' + getSmartsheetAccessToken() }
  };
  var response = UrlFetchApp.fetch(url, options).getContentText();
  //Logger.log('email:%s',JSON.parse(response).email); 
  return JSON.parse(response);
}
