import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from 'src/entities/artist/artist-add.dto.entity';
import { Artist } from '../../entities/artist/artist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistService {
  constructor(private artistRepository: Repository<Artist>) {}

  async getAll(): Promise<Artist[]> {
    return this.artistRepository.find();
  }

  async insert(artistDto: CreateArtistDto): Promise<boolean> {
    const { id_spotify, name } = artistDto;

    const inserted = await this.artistRepository.insert({
      id_spotify,
      name,
    });

    return inserted.raw === 1;
  }

  async checkIfExist(name: string) {
    return await this.artistRepository.findOne({
      where: {
        name,
      },
    });
  }

  async delete(name: string) {
    const deleted = await this.artistRepository.delete({
      name,
    });

    return deleted.raw === 1;
  }
}
