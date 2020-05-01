import User from '../models/User';

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      type: 'participant',
    });

    return res.json({ name: user.name, email: user.email });
  }
}

export default new UserController();
