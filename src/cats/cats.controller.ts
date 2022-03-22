import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

import { PropsCat, InputRegister } from './TypesAndInterfaces';

@Controller('cats')
export class CatsController {
  constructor(readonly catsService: CatsService) {}

  @Get()
  findAll(): PropsCat[] {
    console.log('Request was aceppted');
    return this.catsService.findAll();
  }

  @Post()
  registerCats(@Body() catInput: InputRegister): PropsCat {
    return this.catsService.create(catInput);
  }
}
