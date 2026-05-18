import { IsInt, IsString } from "class-validator";

export class updateItem{
     @IsString()
     name:string;
     @IsInt()
     size:number;
     @IsInt()
     price:number;
     @IsInt()
     quantity:number;
}