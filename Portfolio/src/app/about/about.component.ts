import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit, OnDestroy {

  //TODO RESPONSIVE

  @ViewChild('myDiv') myDiv!: ElementRef;
  typed!: Typed;
  options = {
    strings: ['Who am I?', "About me!"],
    typeSpeed: 300,
    backSpeed: 200,
    showCursor: true,
    cursorChar: "<span style='color: #8181ee; font-size: 4em;'>|</span>",
    loop: true
  };

  ngAfterViewInit() {
    this.typed = new Typed(this.myDiv.nativeElement, this.options);
    this.typed.start()
  }

  ngOnDestroy(): void {
    this.typed.destroy();
  }

}
