import { Injectable } from "@nestjs/common";
import { addItem } from './dto/addItem.dto';
import { updateItem } from './dto/updateItem.dto';

@Injectable()
export class UserService {

    getAll() {
        return "this is list of items ..... see more";
    }

    findOne(id: any) {
        return "item id is " + id;
    }

    addItem(data: addItem) {
        return "added successfully!";
    }

    updateItem(id: any, data: updateItem) {
        return "update successfully!";
    }

    deleteItem(id: any) {
        return "item will be deleted is " + id;
    }
}