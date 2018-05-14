import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SiblingComponent } from './sibling/sibling.component';
import { ShareNumberService } from './share-number.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShareNumberService],
  bootstrap: [AppComponent]
})

export class AppModule { }
