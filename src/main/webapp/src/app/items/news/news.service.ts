import { Injectable } from '@angular/core'
import LoggerService from '../../core/logger/logger.Service'
import { Response } from '@angular/http'
import { Http } from '@angular/http'
import { RequestOptions } from '@angular/http'
import { environment } from './../../../environments/environment'

const SourceUrl: string = environment.sourceUrl + '/news/search/findTop10ByOrderByModifyTimeDesc'

@Injectable()
export class NewsService {
  constructor(private logger: LoggerService, private http: Http) { }

  getTop10News() {
    this.logger.info("getTop10News url:" + SourceUrl)
    return this.http.get(SourceUrl, new RequestOptions()).map((res: Response) => res.json())
  }

}
