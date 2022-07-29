import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  hide=true
  dispMenu(){
    this.hide=!this.hide
  }
  ngOnInit(): void {
    window.addEventListener('click',(e:any)=>{!document.getElementById('btn')?.contains(e.target)&&(this.hide=true)});
  }

}
