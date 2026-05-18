import { Injectable } from "@nestjs/common";
import { addUser } from './dto/addUser.dto';
import { updateItem } from './dto/updateItem.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
@Injectable()
export class UserService {
      constructor(@InjectRepository(User) private readonly user:Repository<User>){}
    async getAll() {
        return  await this.user.find();
    }

    findOne(id: any) {
        return this.user.findOne({where : {id}});
    }

    async addUser(data: addUser) {
        const newUser = await  this.user.create(data);
         return  this.user.save({...newUser});
    }

    async updateUser(id: any, data: addUser) {
      const user = await this.findOne(id);
        return await this.user.save({ ...user, ...data });
    }

    async deleteUser(id: any) {
      return await this.user.delete(id);
    }
}