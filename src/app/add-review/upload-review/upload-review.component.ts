import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { uploadReview } from './upload-review';
import { CompanyService } from 'src/services/company.service';
import { data } from 'jquery';


@Component({
  selector: 'app-upload-review',
  templateUrl: './upload-review.component.html',
  styleUrls: ['../add-review.component.scss']
})
export class UploadReviewComponent implements OnInit {
  i: number = 0;
  ngOnInit() {
    this.companyService.postReview(this.model1).subscribe(data => {
      console.log(data);
    })
  }
  constructor(private elementRef:ElementRef, private companyService: CompanyService) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#phone')
                                  .addEventListener('keyup', this.onClick.bind(this));
  }
  
  onClick() {
    var txt=this.model.phone;
    console.log(this.model.phone)
    if (txt.length==3 || txt.length==7 || txt.length==10)
     this.model.phone=this.model.phone+" ";
  }

  genders = ['Male', 'Female'];

  educations = ['Never attended', 'High School Graduate', 'Some College', 'Associates degree'];

  model = new uploadReview(this.i++,'','','','','','','');
  
  model1 = new uploadReview(1,'1','1','1','1','1','1','1');

  submitted = false;

  onSubmit() { 
    this.companyService.postReview(this.model).subscribe((response) => {
      console.log('POST Request is successful', response)
    },
    error => {
      console.log('ERROR ERROR ERROR', error);
    }
    );
    
    this.submitted = true; }

  handleClicks(value: any) {
  }



}
