import { Injectable } from '@angular/core';
import { Topic } from '../core/interface/Topic';
import { dropdownItem } from '../core/ui/dropdown-menu/dropdown.class';


@Injectable()
export class HeaderService {

  public getTopics(): Topic[] {
    let topics: Topic[] = [];
    let topic: Topic;
    let items: dropdownItem[] = [];
    topic = { name: "關於我們", link: "./aboutUs", items: items };
    topics[0] = topic;
    items = [];
    topic = { name: "最新公告", link: "./news", items: items };
    topics[1] = topic;
    items = [];
    items[0] = { label: '五十肩' };
    items[1] = { label: '肢體障礙' };
    topic = { name: "服務項目", items: items };
    topics[2] = topic;
    return topics;
  }
}
