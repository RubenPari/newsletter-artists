import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from 'src/entities/artist/artist-add.dto.entity';
import { Artist } from '../../entities/artist/artist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistService {
  constructor(private artistRepository: Repository<Artist>) {}

  async GetAll(): Promise<Artist[]> {
    return this.artistRepository.find();
  }

  async Insert(artistDto: CreateArtistDto): Promise<boolean> {
    const { id_spotify, name } = artistDto;

    const inserted = await this.artistRepository.insert({
      id_spotify,
      name,
    });

    if (inserted.raw === 1) {
      return true;
    } else {
      return false;
    }
  }
}
