Meteor.startup(function () {
  smtp = {
    username: 'ahd21@yahoo.de',
    password: 'ncc1701-YaHooYaHoo',
    server: 'smtp.mail.yahoo.com',
    port: 587
  };
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});