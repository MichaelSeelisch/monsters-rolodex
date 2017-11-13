const { User } = require('../models'); // => Read index.js file in 'models' folder and get User table

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      // f.e. Email already exists
      res.status(400).send({
        error: 'This email account is already in use!'
      });
    }
  }
};
