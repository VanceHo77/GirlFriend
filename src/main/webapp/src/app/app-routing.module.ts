import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AboutUsComponentComponent } from './items/about-us-component/about-us-component.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'aboutUs', component: AboutUsComponentComponent
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
