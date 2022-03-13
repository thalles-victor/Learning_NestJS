import { Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Put(':userParamName/:userId')
  register(
    @Param('userParamName')
    userParamName: string,
    @Param('userId')
    userId: number,
  ) {
    return this.appService.registerUser(userParamName, userId);
  }
}

@Controller('getDataUser')
export class GetDataFromUser {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDatauser() {
    return this.appService.userGetData();
  }
}
