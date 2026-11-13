/**
 * Google Apps Script — Genuine Hospi Enterprises Lead Tracker
 * Paste into Extensions > Apps Script inside your Google Sheet,
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 * Copy the Web App URL into GOOGLE_SHEETS_WEBHOOK_URL in Vercel / .env.local.
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Hospital / Clinic',
        'City / State',
        'Product',
        'Source Page',
        'Message',
      ]);
    }

    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.hospitalName || '',
      data.city || '',
      data.productName || 'General Enquiry',
      data.sourcePage || '/',
      data.message || '',
    ]);

    var recipient = 'rohitsingh8885882@gmail.com';
    var subject =
      'New Website Lead: ' +
      (data.productName || 'General Enquiry') +
      ' - ' +
      (data.name || 'Visitor');
    var body =
      'New lead captured on genuinehospi.vercel.app\n\n' +
      'Name: ' + (data.name || '') + '\n' +
      'Phone: ' + (data.phone || 'Not provided') + '\n' +
      'Email: ' + (data.email || '') + '\n' +
      'Hospital/Clinic: ' + (data.hospitalName || 'Not provided') + '\n' +
      'City/State: ' + (data.city || 'Not provided') + '\n' +
      'Product: ' + (data.productName || 'General Enquiry') + '\n' +
      'Source Page: ' + (data.sourcePage || '/') + '\n\n' +
      'Message:\n' + (data.message || '');

    MailApp.sendEmail(recipient, subject, body);

    return ContentService.createTextOutput(JSON.stringify({ status: 'ok' })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
