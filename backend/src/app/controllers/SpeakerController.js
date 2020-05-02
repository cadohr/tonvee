import Twilio from '../../lib/Twilio';

class SpeakerController {
  async show(req, res) {
    const { roomSID } = req.params;

    const speaker = await Twilio.rooms(roomSID).participants.list();

    res.json(speaker);
  }
}

export default new SpeakerController();
