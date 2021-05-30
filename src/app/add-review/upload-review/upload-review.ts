export interface education {
  id: number,
  name: string,
  educationLevel: boolean
}


export class uploadReview {

    constructor(
      public id: number,
      public name: string,
      public email: string,
      public phone: string,
      public address: string,
      public review: string,
      public gender?: string,
      public education?: {
        one: boolean,
        two: boolean,
        three: boolean,
        four: boolean
      }
    ) {  }
  
  }