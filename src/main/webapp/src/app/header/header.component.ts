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
  }

}
