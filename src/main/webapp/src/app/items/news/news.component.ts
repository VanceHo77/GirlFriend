import { Component, OnInit, OnDestroy } from '@angular/core'
import { NewsService } from './news.service';
import LoggerService from '../../core/logger/logger.Service';
import { ToolService } from '../../core/tools/tool.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [LoggerService, NewsService, ToolService]
})
export class NewsComponent implements OnDestroy {

  alternate: boolean = true
  toggle: boolean = true
  size: number = 40
  sub: any
  entries: any[]

  constructor(private logger: LoggerService, private newsService: NewsService) { }

  ngAfterViewInit() {
    this.getTop10News()
  }


  getTop10News() {
    this.sub = this.newsService.getTop10News().subscribe(
      data => {
        let entities: any[] = data._embedded.newsEntities
        let newEntities: any = []
        entities.forEach(function (ele: any) {
          let date = ToolService.dateFormat(ele.modifyTime)
          newEntities.push({ 'date': date, 'name': ele.title, 'description': ele.description })
        })
        this.entries = newEntities
        this.logger.info(this.entries)
      },
      err => this.logger.error(err),
      () => this.logger.info("get Top10News success."),
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
