import { Component, Input .Output} from '@angular/core';

@Component({
  selector:'my-counter',
  templateUrl:`src/counter.component.html`,
  styleUrls:['src/counter.component.css']
})
export class CounterComponent{
  @Input() count:number=0;
  
  increment(){
   this.count = this.count + 1;
   console.log(this.count);
  }
  
  decrement(){
     this.count = this.count - 1;
   console.log(this.count);
  }
}