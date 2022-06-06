import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  id_spotify: string;

  @Column({ nullable: false, length: 255 })
  title: string;

  @Column({ nullable: false, length: 255 })
  album: string;

  @Column({ type: 'year', nullable: false })
  year: number;
}
