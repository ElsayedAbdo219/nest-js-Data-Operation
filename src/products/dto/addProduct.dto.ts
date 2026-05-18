import { IsInt, IsString } from "class-validator";


export class addProduct{
  
    @IsString()
    name: string;
  
    @IsInt()
    price: number;
  
    @IsInt()
    quantity: number;
}