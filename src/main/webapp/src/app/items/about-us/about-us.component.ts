import { Component, OnInit } from '@angular/core';
import { AboutUsDetail } from '../../core/interface/AboutUsDetail';
import { AboutUsService } from './about-us.service';
import LoggerService from '../../core/logger/logger.Service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  providers: [AboutUsService, LoggerService]
})
export class AboutUsComponent implements OnInit {

  public goodTeams: AboutUsDetail[];

  constructor(private aboutService: AboutUsService, private logger: LoggerService) { }

  ngOnInit() {
    this.goodTeams = this.aboutService.getGoodTeams();
    this.logger.log(this.goodTeams);
  }

}