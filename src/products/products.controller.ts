import { Controller , Get , Post , Put , Delete, Body, Param, ValidationPipe} from '@nestjs/common';
import { ProductsService } from './products.service';
import {addProduct}  from './dto/addProduct.dto';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  getAll()
  {
    return this.productsService.getAll();
  }
    @Get('/:id')
    show(@Param('id') id:any)
  {
    return this.productsService.show(id);
  }
  @Post('/')
    add(@Body(new ValidationPipe) addProduct:addProduct)
  {
    return this.productsService.add(addProduct);
  }
    @Put('/:id')
    update(@Param('id') id:any , @Body(new ValidationPipe) addProduct:addProduct )
  {
    return this.productsService.update(id , addProduct );
  }

   @Delete('/:id')
    delete(@Param() id:any)
  {
    return this.productsService.delete(id);
  }
}
