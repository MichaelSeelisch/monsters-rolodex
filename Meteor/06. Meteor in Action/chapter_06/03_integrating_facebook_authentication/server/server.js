if (ServiceConfiguration.configurations.find({
    service: 'facebook'
  }).count() === 0) {
  ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: 'OAuth-credentials-from-facebook',
    secret: 'OAuth-credentials-from-facebook',
    loginStyle: 'popup'
  });
}

Meteor.startup(function () {
  process.env.ROOT_URL = 'http://www.michaelseelisch.de';
});

Accounts.onCreateUser(function (options, user) {
  if (options.profile) {
    user.profile = options.profile;
  }
  else {
    user.profile = {};
  }
  user.profile.rank = 'White belt';
  
  // Sending verification email, ir the user provided an address
  if (options.email) {
    Meteor.setTimeout(function() {
      // Giv Meteor up to 2 seconds to create a user document
      Accounts.sendVerificationEmail(user._id);
      console.log('Verification Email sent!');
    }, 2 * 1000);
  }

  return user;
});