export class CreateSongDto {
  id_spotify: string;
  title: string;
  album: string;
  year: number;

  constructor(id_spotify: string, title: string, album: string, year: number) {
    this.id_spotify = id_spotify;
    this.title = title;
    this.album = album;
    this.year = year;
  }
}
