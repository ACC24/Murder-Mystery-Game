const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Player = mongoose.model("player");
const keys = require("../config/keys");
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Player.findById(jwt_payload.id)
        .then(player => {
          if (player) {
            return done(null, player);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};