import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from "@nestjs/common";
import { UserService } from './User.service';
import { addItem } from './dto/addItem.dto';
import { updateItem } from './dto/updateItem.dto';
import {RolesGuard}  from '../users/guards/roles.guard'
import { Roles } from './decorators/roles.decorator';
@Controller('items')
@UseGuards(RolesGuard)
export class UserController {

  constructor(private userService: UserService) {}

  @Get('/')
  getAll() {
    return this.userService.getAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: any) {
    return this.userService.findOne(id);
  }
   
  @Post('/')
  @Roles('user')
  addItem(@Body() addItem: addItem) {
    return this.userService.addItem(addItem);
  }

  @Put('/:id')
  updateItem(@Param('id') id: any, @Body() updateItem: updateItem) {
    return this.userService.updateItem(id, updateItem);
  }

  @Delete('/:id')
  deleteItem(@Param('id') id: any) {
    return this.userService.deleteItem(id);
  }
}