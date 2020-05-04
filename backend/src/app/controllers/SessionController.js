import jwt from 'jsonwebtoken';

import User from '../models/User';
import File from '../models/File';

import authConfig from '../../config/auth';

import Twilio from '../../lib/Twilio';

class SessionController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      console.log(password);

      const user = await User.findOne({
        where: { email },
        attributes: ['id', 'name', 'email', 'type', 'password_hash'],
        include: [
          { model: File, as: 'avatar', attributes: ['id', 'path', 'url'] },
        ],
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

      Twilio.generateAccesToken(user.name);
      Twilio.addChatGrant();
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
