import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SpotifyWebApi = require('spotify-web-api-node');

@Injectable()
export class SpotifyService {
  private spotifyApi: any;

  constructor() {
    this.spotifyApi = new SpotifyWebApi({
      clientId: '',
      clientSecret: '',
      redirectUrl: '',
    });
  }

  async getArtistIdByName(name: string): Promise<any> {
    this.spotifyApi.searchArtists(name).then(
      (data) => {
        return data.body.Id;
      },
      (err) => {
        console.log(err);
        return err;
      },
    );
  }
}
