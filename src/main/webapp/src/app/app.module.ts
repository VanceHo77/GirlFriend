import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { DropdownComponent } from './core/ui/dropdown-menu/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Reference: https://www.npmjs.com/package/angular-mgl-timeline
import { MglTimelineModule } from 'angular-mgl-timeline';
// Reference: https://www.npmjs.com/package/ngx-owl-carousel
import { OwlModule } from 'ngx-owl-carousel';
import { AboutUsComponent } from './items/about-us/about-us.component';
import { NewsComponent } from './items/news/news.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: []
})
export class PlunkerMaterialModule { }

@NgModule({
  declarations: [
    // UI
    DropdownComponent,
    // App
    AppComponent,
    // index
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    // items
    AboutUsComponent, 
    NewsComponent
  ],
  imports: [
    // UI
    PlunkerMaterialModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    // App
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // Router
    RouterModule,
    AppRoutingModule,
    // Carousel
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
