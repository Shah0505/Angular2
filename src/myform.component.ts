import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector:'my-form',
  templateUrl:'src/myform.component.html',
  styleUrls:['src/myform.component.css']
})
export class MyForm{
  
  submitted=false;
  
  onsubmitt(){
    this.submitted=true;
  }
  
  editDetails(){
    this.submitted=false;
  }
}