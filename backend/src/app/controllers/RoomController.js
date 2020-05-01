import Twilio from '../../lib/Twilio';

class RoomController {
  async store(req, res) {
    const { turn, type = 'peer-to-peer', name } = req.body;

    const room = await Twilio.rooms.create({
      uniqueName: name,
      type,
      enableTurn: turn,
    });

    res.json(room);
  }
}

export default new RoomController();
