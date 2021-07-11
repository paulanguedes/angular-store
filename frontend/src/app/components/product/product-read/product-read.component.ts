import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadTableDataSource } from '../product-read-table/product-read-table-datasource';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductReadTableDataSource;

  products: Product[];
  displayedColumns = ['id', 'name', 'price'];

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
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

}
