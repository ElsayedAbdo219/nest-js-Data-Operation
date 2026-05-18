import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Product}  from './entities/product.entity';
import {addProduct}  from './dto/addProduct.dto';



@Injectable()
export class ProductsService {

    constructor(@InjectRepository(Product) private readonly productRepository : Repository<Product>){}

      async getAll()
      {
        return await this.productRepository.find();
      }
        show(id:any)
      {
        return this.productRepository.findOne({where:{id}});
      }

        add(addProduct:addProduct)
      {
        const product =  this.productRepository.create(addProduct); 
        return this.productRepository.save({...product});
      }
      async  update( id:any , addProduct:addProduct )
      {
        const product =  await this.productRepository.findOne({where: {id}}); 
        return this.productRepository.save({...product ,...addProduct});
      }
    
        delete(id:any)
      {
        return this.productRepository.delete(id);
      }



}
