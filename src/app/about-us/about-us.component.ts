import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  photos=['choco1.jpg','city.png','choco2.jpg']
  photos2=[{name:'Chloe Ferry',url:'chloe2.jpg'},
           {name:'Virat Kohli',url:'virat2.jpg'},
           {name:'Sidemen',url:'sidemen2.jpg'},
           {name:'Gemma Collins',url:'gemma2.jpg'}]
  dip=new Array(4).fill(false)
  disp(i:number){
    this.dip[i]=!this.dip[i]
  }

  ngOnInit(): void {
  }

}
