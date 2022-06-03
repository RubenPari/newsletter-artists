import { Controller, Post } from '@nestjs/common';
import sgMail from '@sendgrid/mail';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  private message: any;

  constructor(private emailService: EmailService) {
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
