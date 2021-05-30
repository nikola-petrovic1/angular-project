export class uploadReview {

    constructor(
      public id: number,
      public name: string,
      public email: string,
      public phone: string,
      public address: string,
      public review: string,
      public gender?: string,
      public education?: string
    ) {  }
  
  }