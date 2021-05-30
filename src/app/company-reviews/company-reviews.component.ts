import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/services/company.service';

interface CompanyReviews {
  socialName: string;
  ratingScore: string;
  totalVotes: number;
  socialLink: string;
}

@Component({
  selector: 'app-company-reviews',
  templateUrl: './company-reviews.component.html',
  styleUrls: ['./company-reviews.component.scss']
})
export class CompanyReviewsComponent implements OnInit {

  company: any;

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.companyService.getCompany().subscribe((response) => {
      if (response) {
        this.company = response;
      }
    });
  }

}