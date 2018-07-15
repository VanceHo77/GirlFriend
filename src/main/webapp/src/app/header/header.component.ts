import { HeaderService } from './header.service'
import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service'
import { Topic } from '../core/interface/Topic'
import { FormControl } from '@angular/forms'
import LoggerService from '../core/logger/logger.Service'
import { Http } from '@angular/http'
import { Subscription } from 'rxjs'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppService, HeaderService, LoggerService]
})
export class HeaderComponent implements OnInit {

  public topics: Topic[]

  searchCtrl: FormControl = new FormControl()
  options = []
  filteredStates: Subscription

  constructor(private headerService: HeaderService, private logger: LoggerService, private http: Http) { }


  ngOnInit(): void {
    this.topics = this.headerService.getTopics()
    this.registerScrollFixedHeaderEvent()
    this.logger.log(this.topics)
    this.registerSearchBarEvent()
  }

  ngOnDestroy() {
    this.filteredStates.unsubscribe()
  }

  registerSearchBarEvent() {
    this.filteredStates = this.searchCtrl.valueChanges
      .startWith(null)
      .debounceTime(5)
      .do(val => {
        this.http.get('https://api.icndb.com/jokes/random/3')
          .toPromise()
          .then(res => {
            this.options = res.json().value
          })
      })
      .subscribe()
  }


  registerScrollFixedHeaderEvent() {
    window.onscroll = function () { addFixHeaderClass() }

    var header = document.getElementById("header")
    var sticky = header.offsetTop

    function addFixHeaderClass() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
      } else {
        header.classList.remove("sticky")
      }
    }
  }
  clearSearchText() {
    this.searchCtrl.setValue("")
  }
}


