import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './users/middleware/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from './users/User.module'
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestsecond',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    })
  ,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('items');
  }
}
