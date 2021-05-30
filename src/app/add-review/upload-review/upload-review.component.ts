import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { education, uploadReview } from './upload-review';
import { CompanyService } from 'src/services/company.service';



@Component({
  selector: 'app-upload-review',
  templateUrl: './upload-review.component.html',
  styleUrls: ['../add-review.component.scss']
})

export class UploadReviewComponent implements OnInit {

  i: number = 0;

  ngOnInit() {}

  public educations: education[];

  constructor(private elementRef:ElementRef, private companyService: CompanyService) {
    this.educations = [
      { id: 1, name: 'Never attended', educationLevel: false },
			{ id: 2, name: 'High School Graduate', educationLevel: false },
			{ id: 3, name: 'Some College', educationLevel: true },
			{ id: 4, name: 'Associates degree', educationLevel: false }
    ]
  }

  onPhoneKeyUp() {
    var txt=this.model.phone;
    console.log(this.model.phone)
    if (txt.length==3 || txt.length==7 || txt.length==10)
     this.model.phone=this.model.phone+" ";
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#phone')
                                 .addEventListener('keyup', this.onPhoneKeyUp.bind(this));
  }

  genders = ['Male', 'Female'];


  model = new uploadReview(this.i++,'','','','','','');

  submitted = false;

  onSubmit() { 
    this.companyService.postReview(this.model).subscribe((response) => {
      console.log('Successfully posted to database', response)
    },
    error => {
      console.log('ERROR ERROR ERROR', error);
    }
    );
    
    this.submitted = true; }

  handleClicks(value: any) {
  }



}
