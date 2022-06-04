import { Controller, Post } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sgMail = require('@sendgrid/mail');
import { SpotifyService } from './spotify.service';

@Controller('spotify')
export class SpotifyController {
  private message: any;

  constructor(private spotifyService: SpotifyService) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    this.message = {
      to: '',
      from: process.env.EMAIL_FROM,
      subject: '',
      text: '',
      html: '',
    };
  }

  @Post('/sendEmail')
  async sendEmail() {
    try {
      const success = await sgMail.send(this.message);
      if (success) {
        return {
          status: 'ok',
          message: 'email send successfully',
        };
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response.body);
      }
    }
  }
}
