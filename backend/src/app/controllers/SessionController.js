import jwt from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../../config/auth';

import Twilio from '../../lib/Twilio';

const speakerArenas = {
  'speaker1@tonvee.com': 'arena-tech',
  'speaker2@tonvee.com': 'arena-inovacao',
  'speaker3@tonvee.com': 'arena-financas',
  'speaker4@tonvee.com': 'arena-varejo',
};

class SessionController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      console.log(password);

      const user = await User.findOne({
        where: { email },
        attributes: ['id', 'name', 'email', 'type', 'password_hash'],
      });

      if (!user) {
        return res.status(400).json({ error: "user doesn't exists" });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(400).json({ error: 'Password is wrong' });
      }

      const token = jwt.sign({ sub: user.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      });

      Twilio.generateAccesToken(user.id);
      if (user.type === 'speaker') {
        Twilio.addVideoGrant(`${user.id}:${speakerArenas[user.email]}`);
      } else {
        Twilio.addVideoGrant();
      }
      const accessToken = Twilio.toJwt();

      return res.json({
        user,
        token,
        accessToken,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SessionController();
