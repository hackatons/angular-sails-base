/**
 * Authentication Controller
 *
 * This is merely meant as an example of how your Authentication controller
 * should look. It currently includes the minimum amount of functionality for
 * the basics of Passport.js to work.
 */
var NotificationController = {
  /**
   * Render the login page
   *
   * The login form itself is just a simple HTML form:
   *
   <form role="form" action="/auth/local" method="post">
   <input type="text" name="identifier" placeholder="Username or Email">
   <input type="password" name="password" placeholder="Password">
   <button type="submit">Sign in</button>
   </form>
   *
   * You could optionally add CSRF-protection as outlined in the documentation:
   * http://sailsjs.org/#!documentation/config.csrf
   *
   * A simple example of automatically listing all available providers in a
   * Handlebars template would look like this:
   *
   {{#each providers}}
   <a href="/auth/{{slug}}" role="button">{{name}}</a>
   {{/each}}
   *
   * @param {Object} req
   * @param {Object} res
   */
  notifyOrder: function (req, res) {
    var recipient = req.param('recipient');
    var brand = req.param('brand');
    var price = req.param('price');
    var modelname = req.param('modelname');

    console.log(recipient,brand,price,modelname);

    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport();

    var logo = require("fs").readFileSync(__dirname+"/e_mail_images/skynda_logo.png");
    var banner = require("fs").readFileSync(__dirname+"/e_mail_images/skynda_banner2.jpg");

    htmlEmail = htmlEmail.replace(new RegExp('{brand}', 'g'), brand);
    htmlEmail = htmlEmail.replace(new RegExp('{modelname}', 'g'), modelname)
    htmlEmail = htmlEmail.replace(new RegExp('{price}', 'g'), price);

    transporter.sendMail({
      from: 'checkout@skynda.me',
      to: recipient,
      subject: 'Your car is on it’s Way',
      html: htmlEmail,
      attachments: [
        {
          filename: 'skynda_logo.png',
          contents: logo
        },
        {
          filename: 'skynda_banner2.jpg',
          contents: banner
        }
      ],
      text: 'Your Car is on it’s Way'
    });
    transporter.close();
    res.send('done ->' +' recipient:'+ recipient + ' brand:'+ brand+' price:' +price + ' modelname:'+ modelname);
  }
};

module.exports = NotificationController;


var htmlEmail =
  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\
  <html xmlns="http://www.w3.org/1999/xhtml">\
  <head>\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
    <title>iDea | Email Template</title>\
  </head>\
  <body style="margin: 0; padding: 0;">\
  <table border="0" cellpadding="0" cellspacing="0" width="100%">\
    <tr>\
      <td style="padding-top:25px;">\
        \
        <!-- Header Start -->\
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">\
          <tr>\
            <td>\
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="580" style="border-collapse: collapse;">\
                <tr>\
                  <td>\
                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="500" style="border-collapse: collapse;">\
                      <!-- logo -->\
                      <tr>\
                        <td align="left">\
                          <a href="../html/index.html">\
                            <img src="skynda_logo.jpg" alt="Company Logo" style="display: block;"/>\
                          </a>\
                        </td>\
                      </tr>\
                      <!-- company slogan -->\
                      <tr>\
                        <td width="100%" align="left" style="font-size: 12px; line-height: 18px; font-family:helvetica, Arial, sans-serif; color:#999999;">\
                        Buying a pre-used car has never been so fun, easy and secure\
                        </td>\
                      </tr>\
                      <!-- Space -->\
                      <tr><td style="font-size: 0; line-height: 0;" height="15">&nbsp;</td></tr>\
                    </table>\
                  </td>\
                </tr>\
              </table>\
            </td>\
          </tr>\
        </table>\
        <!-- Header End -->\
        \
        <!-- Banner Start -->\
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">\
          <tr>\
            <td>\
              <table bgcolor="#fafafa" align="center" border="0" cellpadding="0" cellspacing="0" width="580" style="border-collapse: collapse;">\
                <tr>\
                  <td>\
                    <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">\
                      <tr>\
                        <td align="center" bgcolor="#ffffff" >\
                          <a href="#">\
                            <img src="skynda_banner2.jpg" width="580" alt="Section one image" style="display: block;"/>\
                          </a>\
                        </td>\
                      </tr>\
                    </table>\
                    <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">\
                      <tr>\
                        <td>\
                          <!-- Space -->\
                          <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">\
                            <tr><td style="font-size: 0; line-height: 0;" height="20">&nbsp;</td></tr>\
                          </table>\
                          <table align="center" border="0" cellpadding="0" cellspacing="0" width="540" style="border-collapse: collapse;">\
                            <tr>\
                              <td>\
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">\
                                  <tr>\
                                    <td width="100%" align="left" style="font-size: 28px; line-height: 34px; font-family:helvetica, Arial, sans-serif; font-weight: bold; color:#5A5B5C;">\
                                    Your Car is on it’s Way\
                                    </td>\
                                  </tr>\
                                </table>\
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="75%" style="border-collapse: collapse;">\
                                  <!-- Space -->\
                                  <tr><td style="font-size: 0; line-height: 0;" height="10">&nbsp;</td></tr>\
                                  <tr>\
                                    <td width="100%" align="left" style="font-size: 15px; line-height: 22px; font-family:helvetica, Arial, sans-serif; color:#5A5B5C;">\
                                    </br>\
                                  Hi Karl\
                                  </br></br>\
                              Congratulations, you have chosen well! {brand} Brand and Model Name {modelname} is almost ready and can’t wait to drive with you where ever you need to go.\
                              </br></br>\
                          The price we agreed on: {price}\
                          </br>\
                        You also chose additional services in the sum of: 30.00eur\
                        </br></br>\
                    New owner:\
                    </br>\
                  Karl Anton\
                  </br>\
                Keevise 6\
                </br>\
              34907865\
              </br>\
            karl.anton@live.com\
            </br></br>\
          <b><font style="text-decoration: none; color: #019BFF">What happens next?</font>\
          </b></br>\
      You should make a transfer to EE900540119022 in the sum of {price}eur at your earliest convenience, and definitely before your chosen delivery time.\
      </br></br>\
  We will deliver your new car:\
  </br>\
Keevise 6\
</br>\
8:00 pm\
</br></br>\
Enjoy your new ride!\
  </br>\
  Team Skynda\
  </br></br></br>\
Should you have any questions, feel free to contact us at <a href="mailto:hello@skynda.me" style="text-decoration: none; color: #019BFF"> hello@skynda.me</a>\
  \
</td>\
</tr>\
</table>\
</td>\
</tr>\
</table>\
  <!-- Space -->\
<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">\
  <tr><td style="font-size: 0; line-height: 0;" height="30">&nbsp;</td></tr>\
</table>\
</td>\
</tr>\
</table>\
</td>\
</tr>\
</table>\
</td>\
</tr>\
</table>\
<!-- Banner End -->\
  \
  \
  \
  \
  \
  <!-- Subfooter Start -->\
<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">\
  <tr>\
    <td>\
      <table bgcolor="#019BFF" align="center" border="0" cellpadding="0" cellspacing="0" width="580" style="border-collapse: collapse;">\
        <tr>\
          <td>\
            <!-- Space -->\
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">\
              <tr><td style="font-size: 0; line-height: 0;" bgcolor="#ffffff" height="1">&nbsp;</td></tr>\
              <tr><td style="font-size: 0; line-height: 0;" height="20">&nbsp;</td></tr>\
            </table>\
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="540" style="border-collapse: collapse;">\
              <tr>\
                <td align="center" style="color: #999999; font-size: 14px; line-height: 1px; font-weight: normal; font-family: helvetica, Arial, sans-serif;">\
                </td>\
              </tr>\
            </table>\
            <!-- Space -->\
            <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">\
              <tr><td style="font-size: 0; line-height: 0;" height="2">&nbsp;</td></tr>\
            </table>\
          </td>\
        </tr>\
      </table>\
    </td>\
  </tr>\
  \
</table>\
<!-- Subfooter End -->\
  \
  \
</td>\
</tr>\
</table>\
</body>\
</html>';
