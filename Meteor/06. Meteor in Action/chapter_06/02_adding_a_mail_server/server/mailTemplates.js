Accounts.emailTemplates.siteName = 'Meteor in Action userApp';

// Users will see this as the sender of all emails
Accounts.emailTemplates.from = 'Michael <ahd21@yahoo.de>';

Accounts.emailTemplates.verifyEmail.subject = function (user) {
  return 'Confirm Your Email Address, ' + user.username;
};

// Defines the content of the verification email
Accounts.emailTemplates.verifyEmail.text = function (user, url) {
  return 'Welcome to the Meteor in Action userApp!\n' + 'To verify your email address go ahead and follow the link below:\n\n' + url;
};

Accounts.emailTemplates.verifyEmail.html = function (user, url) {
  return '<h1>Welcome to the Meteor in Action userApp!</h1>' + '<p>To <strong>verify your email address</strong> go ahead and follow the link below:</p>' + url;
};