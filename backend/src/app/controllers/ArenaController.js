import Arena from '../models/Arena';

class ArenaController {
  async index(req, res) {
    const arenas = await Arena.findAll({ attributes: ['id', 'name', 'slug'] });

    res.json(arenas);
  }
}

export default new ArenaController();
