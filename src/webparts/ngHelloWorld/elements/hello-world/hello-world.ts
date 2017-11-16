import { Component, NgModule, Input, ViewEncapsulation } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hello-world',
  templateUrl: `./hello-world.html`,
  styleUrls: [
   './hello-world.scss'
  ],
  host: {
    class: 'hello-world'
  },
  encapsulation: ViewEncapsulation.Native
})
export class HelloWorld {
  @Input() name = 'Angular'
}