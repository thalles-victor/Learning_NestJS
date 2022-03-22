import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RegisterRecipe } from './app.controller';

import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';

import { LoggerMiddleware } from './cats/logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [RecipesModule, CatsModule],
  controllers: [RegisterRecipe, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
