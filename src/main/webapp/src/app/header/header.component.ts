import { HeaderService } from './header.service';
import { Component, ElementRef, Inject, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AppService } from '../app.service';
import { TreatmentItems } from '../core/interface/interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppService, HeaderService]
})
export class HeaderComponent implements OnInit {

  public treatmentItems: TreatmentItems;

  constructor(private appService: AppService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.treatmentItems = this.appService.getItemsSource();
    this.registerScrollFixedHeaderEvent();
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


