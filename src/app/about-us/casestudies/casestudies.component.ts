import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casestudies',
  templateUrl: './casestudies.component.html',
  styleUrls: ['./casestudies.component.scss']
})
export class CasestudiesComponent implements OnInit {

  constructor() { }
  hideText=[true,true]
  viewText(i:number){
    this.hideText[i]=!this.hideText[i]
  }


  hideVideo=[true,true]
  playVideo(i:number){
    this.hideVideo[i]=false
  }
  ngOnInit(): void {
  }

}
