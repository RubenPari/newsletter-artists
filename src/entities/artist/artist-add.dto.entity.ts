export class CreateArtistDto {
  id_spotify: string;
  name: string;

  constructor(id_spotify: string, name: string) {
    this.id_spotify = id_spotify;
    this.name = name;
  }
}
