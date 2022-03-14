import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type UserProps = {
  id: number;
  name: string;
  createdAt: Date;
};

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

  async registerUser(userParamName: string): Promise<object> {
    const data = await prisma.user.create({
      data: {
        name: userParamName,
      },
    });
    console.log('User have register');
    console.log(data);
    return data;
  }

  async getAllUsers(): Promise<UserProps[]> {
    const data = await prisma.user.findMany();
    return data;
  }
}
