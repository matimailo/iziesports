import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { LiveController } from './live/live.controller';
import { GamesController } from './games/games.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController, HomeController, LiveController, GamesController],
  providers: [AppService],
})
export class AppModule {}
