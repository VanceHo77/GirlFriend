import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  alternate: boolean = true;
  toggle: boolean = true;
  size: number = 40;

  entries = [
    {
      header: 'header',
      content: 'content'
    },
    {
      header: 'header2',
      content: 'content2'
    }
  ]
  
}
