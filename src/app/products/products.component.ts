import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  photos=[
     {name:'Chloe Ferry',url:'chloe.png',insta:'3.7 M',tiktok:'395.2 K', youtube:'56.8 K'},
     {name:'Gemma Collins',url:'gemma.png',insta:'2.2 M',tiktok:'387 K'},
     {name:'Virat Kohli',url:'virat.png',insta:'193 M', youtube:'16 K'},
     {name:'Sidemen',url:'sidemen.png',insta:'4.1 M',tiktok:'41.9 M', youtube:'14.7M'}
  ]
  photos2=['chloe3.png','virat3.png','sidemen3.png']
  dip=new Array(4).fill(false)
  disp(i:number){
    this.dip[i]=!this.dip[i]
  }
  ngOnInit(): void {
  }

}
