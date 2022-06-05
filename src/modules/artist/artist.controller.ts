import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateArtistDto } from 'src/entities/artist/artist-add.dto.entity';
import { SpotifyService } from '../spotify/spotify.service';
import { ArtistService } from './artist.service';

@Controller('artists')
export class ArtistController {
  constructor(
    private readonly artistService: ArtistService,
    private readonly spotifyService: SpotifyService,
  ) {}

  @Post('/add/:name')
  async add(@Param('name') name: string) {
    const id_spotify_artist = await this.spotifyService.getArtistIdByName(name);

    const artistToAdd = new CreateArtistDto(id_spotify_artist, name);

    const inserted = await this.artistService.insert(artistToAdd);

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

  @Get('/all')
  async getAll() {
    return this.artistService.getAll();
  }

  @Get('/check-if-exist/:name')
  async checkIfExist(@Param('name') name: string) {
    const exists = await this.artistService.checkIfExist(name);

    if (exists) {
      return {
        status: 'ok',
        message: 'artist exists',
      };
    } else {
      return {
        status: 'error',
        message: 'artist does not exists',
      };
    }
  }

  @Delete('/delete/:name')
  async delete(@Param('name') name: string) {
    const deleted = await this.artistService.delete(name);

    if (deleted) {
      return {
        status: 'ok',
        message: 'artist deleted successfully',
      };
    } else {
      return {
        status: 'error',
        message: 'error to delete artist',
      };
    }
  }
}
