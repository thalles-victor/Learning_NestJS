import { Injectable } from '@nestjs/common';

export interface Cat {
  name: string;
  age: number;
  breed: string;
}

@Injectable()
export class CatsService {
  cats: Cat[] = [
    {
      name: 'spin',
      age: 2,
      breed: 'kdjfe',
    },
  ];
  constructor() {
    console.log('Constructor have initializated');
  }

  async create(cat: Cat): Promise<Cat> {
    await this.cats.push(cat);
    return cat;
  }

  findAll() {
    return this.cats;
  }
}
