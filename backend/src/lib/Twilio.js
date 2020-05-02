import twilio from 'twilio';

class Twilio {
  constructor() {
    this.client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );

    this.token = '';
  }

  video() {
    return this.client.video;
  }

  generateAccesToken(identity) {
    this.token = new twilio.jwt.AccessToken(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_API_KEY_SID,
      process.env.TWILIO_API_KEY_SECRET,
    );

    this.token.identity = identity;
  }

  addVideoGrant(room) {
    const videoGrant = new twilio.jwt.AccessToken.VideoGrant({ room });
    this.token.addGrant(videoGrant);
  }

  toJwt() {
    return this.token.toJwt();
  }

  async getParticipantsInRoom(room) {
    return this.client.video.rooms(room).participants.list();
  }
}

export default new Twilio();
