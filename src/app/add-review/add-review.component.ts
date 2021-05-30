import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/services/company.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface AppReviews {
  totalRating: string;
  writeReview: string;
  addPhoto: string;
}

interface Review {
  id: number;
  username: string;
  email: string;
  review: string,
  rating: number;
}

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  SERVER_URL = "http://localhost:3000/companies";
  uploadForm!: FormGroup;



  closeBtn: string = '';
  handleClick(value: any) {
    var form = document.getElementById('add-review');
    var input = document.getElementsByTagName('input');
  }
  
  appReview: any;

  constructor( 
    private companyService: CompanyService) {
  }

  ngOnInit(): void {

    

    this.companyService.getCompany().subscribe((response) => {
      if (response) {
        this.appReview = response;
      }
    });
  }

}
