const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL:"/auth/google/callback",
    proxy: true
}, (accessToken, refreshToken, profile) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile', profile); 
}, 
)
);