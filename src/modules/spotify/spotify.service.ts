import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SpotifyWebApi = require('spotify-web-api-node');

@Injectable()
export class SpotifyService {
  private spotifyApi = new SpotifyWebApi({
    clientId: '',
    clientSecret: '',
    redirectUrl: '',
  });
}
