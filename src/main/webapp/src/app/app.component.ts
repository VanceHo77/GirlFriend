import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.setCommonData();
  }

  setCommonData() {
    this.appService.setCommonData();
  }
}
