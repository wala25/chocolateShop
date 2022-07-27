import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  photos=['photo.png','photo.png','photo.png']
  photos2=[{name:'Chloe Ferry',url:'photo.png'},
           {name:'Virat Kohli',url:'photo.png'},
           {name:'Sidemen',url:'photo.png'},
           {name:'Gemma Collins',url:'photo.png'}]
  dip=new Array(4).fill(false)
  disp(i:number){
    this.dip[i]=!this.dip[i]
  }


  ngOnInit(): void {
  }

}
