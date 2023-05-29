import { Component } from '@angular/core';
import {sidenavContent} from "./sidenav-content";

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss']
})
export class SideNavContentComponent {

  navigation:sidenavContent[] = [
    new sidenavContent('Home', 'home'),
    new sidenavContent('About', 'face'),
    new sidenavContent('Projects', 'work'),
    new sidenavContent('Skills', 'poll'),
    new sidenavContent('Contact', 'mail'),
  ];

  selectPage(step: string) {
    const section = document.getElementById(step);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
