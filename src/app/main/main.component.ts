import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name: string = 'Reginaldo'

  myNumber: number = 42

  addClick(){
    this.myNumber++;
  }

  subtractClick(){
    this.myNumber--;
  }

}
