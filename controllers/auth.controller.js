const User = require('../models/user.model');
function getSignUp(req, res) {
  res.render('customer/auth/signup');
}
async function signup(req, res) {
  const user = new User(
    req.bodyemail,
    req.bodypassword,
    req.bodyfullname,
    req.bodytreet,
    req.bodypostal,
    req.bodycity
  );
  await user.signup();
  res.redirect('/login');
}

function getLogin(req, res) {
  res.render('customer/auth/login');
}
module.exports = {
  getSignUp,
  getLogin,
  signup,
};
