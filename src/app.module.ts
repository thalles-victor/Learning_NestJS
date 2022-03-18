import { Module } from '@nestjs/common';
import { AppController, GetDataFromUser } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, GetDataFromUser, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
