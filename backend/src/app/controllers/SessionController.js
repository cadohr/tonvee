import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: "user doesn't exists" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: 'Password is wrong' });
    }

    const { id, name, type } = user;

    return res.json({
      user: { name, email, type },
      token: jwt.sign({ sub: id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
