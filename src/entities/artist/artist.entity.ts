import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  id_spotify: string;

  @Column({ nullable: false, length: 255 })
  name: string;
}
