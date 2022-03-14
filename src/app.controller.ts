import { Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getAllUsers();
  }

  @Put(':userParamName/')
  register(
    @Param('userParamName')
    userParamName: string,
  ) {
    return this.appService.registerUser(userParamName);
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
