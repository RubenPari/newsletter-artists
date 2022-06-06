import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sgMail = require('@sendgrid/mail');

@Injectable()
export class EmailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(to: string, subject: string, text: string, html: string) {
    const msg = {
      to: to,
      from: process.env.SENDGRID_FROM,
      subject: subject,
      text: text,
      html: html,
    };
    await sgMail.send(msg);
  }

  /**
   * Cron every 1 day
   * function that check if there a new song
   * for every artist and (if it there) send
   * an email
   */
  @Cron('* * * 1 * *')
  async checkNewsSongs() {

  }
}
