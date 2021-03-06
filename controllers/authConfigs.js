const {
  app,
  flash,
  session,
  passport,
  LocalStrategy,
  methodOverride,
} = require('./handleVars');
const User = require('../models/User');

const SECRET_KEY = 'ASHDKJASwhdiuashdflia3qwalkhfQAFaf243raoshas6ka38kashdf298';
const sessionConfig = session({
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: false,
});

const authConfig = () => {
  app.use(sessionConfig);
  app.use(flash());
  app.use(methodOverride);
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
};

module.exports = authConfig;
