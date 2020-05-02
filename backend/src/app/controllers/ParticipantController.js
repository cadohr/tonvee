import Twilio from '../../lib/Twilio';

class ParticipantController {
  async index(req, res) {
    const { roomSID } = req.params;

    const participants = await Twilio.getParticipantsInRoom(roomSID);

    res.json(participants);
  }
}

export default new ParticipantController();
