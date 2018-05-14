import { Component, OnInit, Input } from '@angular/core';

import { ShareNumberService } from '../share-number.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  myNumber: number = undefined

  constructor(private ShareNumberService: ShareNumberService) { }

  getNumber(){
    console.log("before", this.myNumber )
    this.myNumber = this.ShareNumberService.getNumber();
    console.log("after", this.myNumber )

    console.log(this.ShareNumberService.getNumber())
  }

}
