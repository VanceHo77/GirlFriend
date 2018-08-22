import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './items/about-us/about-us.component';
import { NewsComponent } from './items/news/news.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'aboutUs', component: AboutUsComponent
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
