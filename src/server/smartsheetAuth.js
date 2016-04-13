/* 
See smartsheetAuthConfig.js for SMARTSHEET_CLIENT_SECRET & SMARTSHEET_CLIENT_ID
*/

function getSmartsheetService() {
  // Create a new service with the given name. The name will be used when
  // persisting the authorized token, so ensure it is unique within the
  // scope of the property store.
  return OAuth2.createService('scott_smartsheet')

      // Set the endpoint URLs, which are the same for all Google services.
      .setAuthorizationBaseUrl('https://app.smartsheet.com/b/authorize')
      .setTokenUrl('https://api.smartsheet.com/2.0/token')

      // Set the client ID and secret, from the Google Developers Console.
      .setClientId(SMARTSHEET_CLIENT_ID)
      .setClientSecret(SMARTSHEET_CLIENT_SECRET)

      // Set the name of the callback function in the script referenced
      // above that should be invoked to complete the OAuth flow.
      .setCallbackFunction('authCallback')

      // Set the property store where authorized tokens should be persisted.
      .setPropertyStore(PropertiesService.getUserProperties())

      // Set the scopes to request (space-separated for Google services).
      .setScope('READ_SHEETS')
  
      // Set the handler for adding Smartsheet's required SHA hash parameter to the payload:
      .setTokenPayloadHandler(smartsheetTokenHandler)
      ;
}


function smartsheetTokenHandler(payload) {
  var codeOrRefreshToken = payload.code ? payload.code : payload.refresh_token;
  var input = SMARTSHEET_CLIENT_SECRET + "|" + codeOrRefreshToken;
  var hash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,
                                          input,
                                          Utilities.Charset.UTF_8);
  hash = hash.map(function(val) {
    // Google appears to treat these as signed bytes, but we need them unsigned...
    if (val < 0)
      val += 256;
    var str = val.toString(16);
    // pad to two hex digits:
    if (str.length == 1)
      str = '0' + str;
    return str;
  });
  payload.hash = hash.join("");
  // Smartsheet doesn't need the client secret sent (secret is verified by the hash)
  if (payload.client_secret) {
    delete payload.client_secret;
  }
  return payload;  
}

// Specified in getSmartsheetService to handle OAuth callback.
function authCallback(request) {
  var smartsheetService = getSmartsheetService();
  var isAuthorized = smartsheetService.handleCallback(request);
  var t = HtmlService.createTemplateFromFile('authCallbackPage');
  t.isSmartsheetAuthorized = isAuthorized;
  return t.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function isSmartsheetAuthorized() {
  return getSmartsheetService().hasAccess();
}

function smartsheetLogout() {
  getSmartsheetService().reset();
}

function getSmartsheetAccessToken() { 
  return getSmartsheetService().getAccessToken();
}