import passport from 'passport';
import passportJWT from 'passport-jwt';

import authConfig from '../config/auth';

import User from '../app/models/User';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

class Passport {
  constructor() {
    passport.use(
      new JWTStrategy(
        {
          jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
          secretOrKey: authConfig.secret,
        },
        async function (payload, cb) {
          try {
            const user = await User.findByPk(payload.sub);

            cb(null, user);
          } catch (err) {
            cb(err);
          }
        },
      ),
    );
  }
}

export default new Passport();
