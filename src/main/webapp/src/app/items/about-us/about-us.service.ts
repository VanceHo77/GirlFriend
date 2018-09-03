import { Injectable } from '@angular/core';
import { AboutUsDetail } from 'src/app/core/interface/AboutUsDetail';

@Injectable()
export class AboutUsService {

  public getGoodTeams() {
    let goodTeams: AboutUsDetail[] = [];
    let personal: AboutUsDetail;
    personal = {
      imgUrl: "assets/images/aboutUs/staff-1.jpg",
      description: "<h3>温小君 醫師</h3>"
        + "<p>學歷：弘光科技大學物理治療系 畢業</p>"
        + "<p>專長：骨科、電療、徒手治療</p>"
    };
    goodTeams[0] = personal;

    personal = {
      imgUrl: "assets/images/aboutUs/staff-1.jpg",
      description: "<h3>何小皓 醫師</h3>"
        + "<p>學歷：高雄第一科技大學物理治療系 畢業</p>"
        + "<p>專長：骨科、電療、徒手治療</p>"
    };
    goodTeams[1] = personal;
    return goodTeams;
  }

}