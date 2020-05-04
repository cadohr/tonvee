import Arena from '../models/Arena';

class ArenaController {
  async index(req, res) {
    const arenas = await Arena.findAll({ attributes: ['id', 'name', 'slug'] });

    res.json(arenas);
  }

  async show(req, res) {
    const { slug } = req.params;

    const { id, name } = await Arena.findOne({
      where: { slug },
      attributes: ['id', 'name', 'slug'],
    });

    res.json({ id, name, slug });
  }
}

export default new ArenaController();
