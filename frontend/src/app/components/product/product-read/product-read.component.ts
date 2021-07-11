import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ProductReadTableDataSource } from './product-read-table-datasource';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductReadTableDataSource;

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.dataSource = new ProductReadTableDataSource();

    this.productService.read().subscribe(products => {
      this.products = products
    })
  }
  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }

}
