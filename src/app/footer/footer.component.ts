import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

items=['My chocolate shop','for creators, influencers and sports stars', 'my chocolate shop', 'for creators, influencers and sports stars']

  ngOnInit(): void {
  }

}
