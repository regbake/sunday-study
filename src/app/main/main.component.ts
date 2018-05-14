import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ShareNumberService } from '../share-number.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  constructor(private ShareNumberService: ShareNumberService) { }

  ngOnInit() {
  }

  name: string = 'Reginaldo'

  myNumber: number = 42

  addClick(){
    this.myNumber++;
    this.ShareNumberService.setNumber(this.myNumber);
  }

  subtractClick(){
    this.myNumber--;
    this.ShareNumberService.setNumber(this.myNumber);

  }

}
