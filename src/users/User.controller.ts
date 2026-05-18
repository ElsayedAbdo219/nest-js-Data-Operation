import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from "@nestjs/common";
import { UserService } from './User.service';
import { addUser } from './dto/addUser.dto';
import { updateItem } from './dto/updateItem.dto';
// import {RolesGuard}  from '../users/guards/roles.guard'
import { Roles } from './decorators/roles.decorator';
@Controller('users')
// @UseGuards(RolesGuard)
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
  // @Roles('user')
  addUser(@Body() addUser: addUser) {
    return this.userService.addUser(addUser);
  }

  @Put('/:id')
  updateUser(@Param('id') id: any, @Body() addUser: addUser) {
    return this.userService.updateUser(id, addUser);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: any) {
    return this.userService.deleteUser(id);
  }
}