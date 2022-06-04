import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from '../email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpotifyModule } from '../spotify/spotify.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'playlist-do-user-10671938-0.b.db.ondigitalocean.com',
      username: 'doadmin',
      password: 'AVNS_ZfCTZ4BWfndxI5L',
      port: 25060,
      database: 'newsletter',
      entities: [],
    }),
    EmailModule,
    SpotifyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
