import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { uploadReview } from 'src/app/add-review/upload-review/upload-review';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

constructor( private http: HttpClient ) {}


postReview(review: uploadReview) {                
    const body = JSON.stringify( review );
    const headers = {'content-type': 'application/json'};
    console.log(body);
    return this.http.post('http://localhost:3000/reviews', body, { 'headers': headers })

}

getCompany() {
    return this.http.get('http://localhost:3000/companies');
}

}
