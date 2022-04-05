import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  
  // @ts-ignore
  product: Product

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    const id = 1
    // @ts-ignore
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {

  }
  
  cancel(): void {
    
  }
}
