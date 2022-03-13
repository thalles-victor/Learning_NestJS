import { Module } from '@nestjs/common';
import { AppController, GetDataFromUser } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, GetDataFromUser],
  providers: [AppService],
})
export class AppModule {}
