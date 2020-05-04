import User from '../models/User';

class UserController {
  async store(req, res) {
    const { name, email, password, avatar_id } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      type: 'participant',
      avatar_id,
    });

    return res.json({ name: user.name, email: user.email, type: user.type });
  }

  async update(req, res) {
    const user = req.user;
    const {
      email: newEmail,
      oldPassword,
      password,
      confirmPassword,
    } = req.body;

    if (newEmail && newEmail != user.email) {
      const userExists = await User.findOne({ where: { email: newEmail } });

      if (userExists) {
        return res.status(400).json({ error: 'Email already in use' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ erro: 'Old password is wrong' });
    }

    if (password !== confirmPassword) {
      return res
        .status(401)
        .json({ error: 'New password and confirmation are not the same' });
    }

    await user.update(req.body);

    const { id, name, email, type } = await User.findByPk(user.id);

    return res.json({ id, name, email, type });
  }
}

export default new UserController();
