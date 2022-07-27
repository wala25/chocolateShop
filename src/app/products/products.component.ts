import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  photos=['photo.png','photo.png','photo.png','photo.png']
  photos2=['photo.png','photo.png','photo.png']
dip=new Array(4).fill(false)
  disp(i:number){
    this.dip[i]=!this.dip[i]
  }
  ngOnInit(): void {
  }

}
