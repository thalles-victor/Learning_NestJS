import { Injectable } from '@nestjs/common';
import { PropsCat } from './TypesAndInterfaces';
import { cats } from './database';

@Injectable()
export class CatsService {
  findAll() {
    return cats;
  }

  create(cat: PropsCat) {
    cats.push(cat);
    return cat;
  }
}
