import {Component, EventEmitter, Input, Output} from '@angular/core';
import {sidenavContent} from "./sidenav-content";

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss']
})
export class SideNavContentComponent {

  //TODO When press on one of the sideContents close drawer
  //TODO RESPONSIVE

  // Use to close the drawer in parent
  @Input() drawer: any;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeIconFromChild(close: boolean){
    this.close.emit(close);
  }

  navigation:sidenavContent[] = [
    new sidenavContent('Home', 'home'),
    new sidenavContent('About', 'face'),
    new sidenavContent('Skills', 'poll'),
    new sidenavContent('Projects', 'work'),
    new sidenavContent('Contact', 'mail'),
  ];

  selectPage(step: string) {
    const section = document.getElementById(step);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
