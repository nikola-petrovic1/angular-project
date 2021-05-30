import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyReviewsComponent } from './company-reviews/company-reviews.component';
import { AddReviewComponent } from './add-review/add-review.component';

import { CompanyService } from '../services/company.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadReviewComponent } from './add-review/upload-review/upload-review.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoComponent,
    CompanyReviewsComponent,
    AddReviewComponent,
    UploadReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CompanyService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
