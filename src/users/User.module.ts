import { Module } from '@nestjs/common';
import {UserController} from './User.controller';
import {UserService} from './User.service';
import { User } from './entities/user.entity';
import {TypeOrmModule} from '@nestjs/typeorm';


const schema = [User];
@Module({
   imports: [TypeOrmModule.forFeature(schema)],
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule {}