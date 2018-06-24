import { IndexService } from './index.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [IndexService]
})
export class IndexComponent implements OnInit {

  // TODO In the future will be modified to read the dynamically data
  public images = ['/assets/images/index_img_01.jpg', '/assets/images/index_img_02.jpg', '/assets/images/index_img_03.jpg'];

  constructor(private appService: IndexService) { }

  ngOnInit() {
  }

}
