import twilio from 'twilio';

class Twilio {
  constructor() {
    this.client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );
  }
}

export default new Twilio().client.video;
