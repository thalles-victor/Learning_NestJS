import { Injectable } from '@nestjs/common';

import { db } from './database/data';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }

  userGetData(): object {
    return {
      name: 'thalles',
      email: 'thalles@gmail.com',
      thelephone: '965623321',
    };
  }

  registerUser(userParamName: string, userId: number): object[] {
    let data = db.filter((user) => user.name === userParamName);
    data = data.filter((user) => user.id == userId);

    return data;
  }
}
