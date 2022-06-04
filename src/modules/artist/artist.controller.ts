import { Controller, Param, Post } from '@nestjs/common';
import { CreateArtistDto } from 'src/entities/artist/artist-add.dto.entity';
import { SpotifyService } from '../spotify/spotify.service';
import { ArtistService } from './artist.service';

@Controller('artists')
export class ArtistController {
  constructor(
    private readonly artistService: ArtistService,
    private readonly spotifyService: SpotifyService,
  ) {}

  /**
   * Add an artist in the db
   */
  @Post('/add')
  async add(@Param('name') name: string) {
    const id_spotify_artist = await this.spotifyService.getArtistIdByName(name);

    const artistToAdd = new CreateArtistDto(id_spotify_artist, name);

    const inserted = await this.artistService.Insert(artistToAdd);

    if (inserted) {
      return {
        status: 'ok',
        message: 'artist added successfully',
      };
    } else {
      return {
        status: 'error',
        message: 'error to insert artist',
      };
    }
  }
}
