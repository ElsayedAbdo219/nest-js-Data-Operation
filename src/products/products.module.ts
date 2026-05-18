import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
const schema = [Product];
@Module({
   imports: [TypeOrmModule.forFeature(schema)],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
