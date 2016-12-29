import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl:`src/app.component.html`
})
export class App {
  name:string;
  
  initial:number=null;
  
  submit(val){
    this.initial=parseInt(val);
    console.log(this.initial);
  }
  constructor() {
    this.name = 'Counter App'
  }
}