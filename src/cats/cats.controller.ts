import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  HttpException,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { response, Response } from 'express';
//Dto
import { Cat } from '../interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: Cat) {
    console.log(createCatDto);
    this.catsService
      .create(createCatDto)
      .then(() => {
        throw new HttpException(
          {
            status: HttpStatus.CREATED,
            error: 'This is a custom error',
          },
          HttpStatus.CREATED,
        );
      })
      .catch(() => {
        //throw new HttpException('Fail', HttpStatus.CONFLICT);
      });
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
