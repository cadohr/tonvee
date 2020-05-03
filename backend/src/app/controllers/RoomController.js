const rooms = [
  { id: 1, name: 'Tech', slug: 'techroom' },
  { id: 2, name: 'Inovação', slug: 'inovationroom' },
  { id: 3, name: 'Finanças', slug: 'financesroom' },
  { id: 4, name: 'Varejo', slug: 'retailroom' },
];
class RoomController {
  async index(req, res) {
    res.json(rooms);
  }

  async show(req, res) {
    const { sid } = req.params;

    const room = rooms.map((r) => (r.id = sid));

    res.json(room);
  }
}

export default new RoomController();
