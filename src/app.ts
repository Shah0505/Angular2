//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'


import { App  } from './app.component'
import { CounterComponent } from './counter.component'
import { MyHeader } from './myheader.component'
import { MyForm } from './myform.component'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
      App,
      CounterComponent,
      MyHeader,
      MyForm
      
    ],
  bootstrap: [ App ]
})
export class AppModule {}