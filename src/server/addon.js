/**
 * Called when an add-on is installed.
 * @param {Object} e Apps Script onInstall event object
 */
function onInstall(e) {
  onOpen(e);
}


/**
 * Called when a spreadsheet that is associated with this add-on is opened.
 * @param {Object} e Apps Script onInstall event object
 */
function onOpen(e) {
    SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('Smartsheet Add-On')
      .addItem('Show sidebar', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  var page = null;

  if (!page) {
    page = HtmlService.createTemplateFromFile('sidebar');
    page.authorizationUrl = getSmartsheetService().getAuthorizationUrl();
    var hasAccess = isSmartsheetAuthorized();
    page.isSmartsheetAuthorized = hasAccess;
    if (hasAccess) {
        page.smartsheetUserProfile = JSON.stringify(getSmartsheetUser()); 
    } else {
        page.smartsheetUserProfile = null;
    }
    page = page.evaluate();
    page.setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setTitle('My Smartsheet Sidebar')
        .setWidth(300);
  }
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(page);
}