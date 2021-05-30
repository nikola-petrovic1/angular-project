import { Component, OnInit } from '@angular/core';
import { faStar, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';
import { CompanyService } from 'src/services/company.service';

export interface ComanyInfoImage {
  src: string;
  alt: string;
}

export interface CompanyInfoSocialNetwork {
  href: string;
  text: string;
  title: string;
}

export interface CompanyInfo {
  images:  ComanyInfoImage[];
  totalRating: number;
  numberUserRating: number;
  companyName: string;
  address: string;
  phone: string;
  instagram: CompanyInfoSocialNetwork[];
  facebook: CompanyInfoSocialNetwork[];
  website: CompanyInfoSocialNetwork[];
}


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  faStar = faStar;
  faPhoneAlt = faPhoneAlt;
  faFacebookSquare = faFacebookSquare;
  faInstagramSquare = faInstagramSquare;
  faInternetExplorer = faInternetExplorer;
  company: any;
    
  

  constructor( private companyService: CompanyService ) {}

  ngOnInit(): void {
    this.companyService.getCompany().subscribe((response) => {
      if (response) {
        this.company = response;
        console.log(this.company);
      }
    });
  }

}
