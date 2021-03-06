/* eslint no-underscore-dangle: 0, no-param-reassign:0 */
const { bodyParser } = require('./handleVars');

const urlEncMw = bodyParser.urlencoded({ extended: true });
const flashMw = (rq, rs, next) => {
  rs.locals.currentUser = rq.user;
  rs.locals.error = rq.flash('error');
  rs.locals.success = rq.flash('success');
  return next();
};
const isLoggedIn = (rq, rs, next) => {
  if (!rq.isAuthenticated()) {
    rq.flash('error', 'Login required');
    return rs.redirect('/login');
  }
  return next();
};

module.exports = {
  urlEncMw,
  flashMw,
  isLoggedIn,
};
