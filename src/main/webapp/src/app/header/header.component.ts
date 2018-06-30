import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Topic } from '../core/interface/Topic';
import LoggerService from '../core/logger/logger.Service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppService, HeaderService, LoggerService]
})
export class HeaderComponent implements OnInit {

  public topics: Topic[];

  constructor(private headerService: HeaderService, private logger:LoggerService) { }

  ngOnInit(): void {
    this.topics = this.headerService.getTopics();
    this.registerScrollFixedHeaderEvent();
    this.logger.log(this.topics)
  }


  private registerScrollFixedHeaderEvent() {
    window.onscroll = function () { addFixHeaderClass() };

    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    function addFixHeaderClass() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
}


