import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { dataAuthor, dataRecipes } from './TypesAndInterfaces/Inputs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }

  async registerRecipe(recipeData: dataRecipes) {
    return recipeData;
  }

  async findAllRecipes() {
    return 'This module return all recipes';
  }
}
