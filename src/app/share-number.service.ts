import { Injectable } from '@angular/core';

@Injectable()
export class ShareNumberService {
  private myNumber: number = undefined;

  setNumber(myNumber: number){
    this.myNumber = myNumber;
  }

  getNumber(){
    return this.myNumber;
  }

  greet(){
    console.log("howdy, this is a rad service!")
  }

}
