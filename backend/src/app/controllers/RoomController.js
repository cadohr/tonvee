import Twilio from '../../lib/Twilio';

class RoomController {
  async index(req, res) {
    const rooms = await Twilio.rooms.list();

    res.json(rooms);
  }

  async show(req, res) {
    const { sid } = req.params;

    const room = await Twilio.rooms(sid).fetch();

    res.json(room);
  }

  async store(req, res) {
    const { turn = false, type = 'group', name } = req.body;

    const room = await Twilio.rooms.create({
      uniqueName: name,
      type,
      enableTurn: turn,
    });

    res.json(room);
  }
}

export default new RoomController();
