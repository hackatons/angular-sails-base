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
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'skynda.me@gmail.com',
        pass: 'me.skynda'
      }
    });
    transporter.sendMail({
      from: 'skynda.me@gmail.com',
      to: 'ing.edwardyrc@gmail.com',
      subject: 'hello',
      html: '<b>hello world!</b>',
      text: 'hello world!'
    });
    transporter.close();

    res.send("done");
  }
};

module.exports = NotificationController;
