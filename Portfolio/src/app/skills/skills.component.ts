import {Component, OnInit} from '@angular/core';
import {FireService} from "../service/fire.service";
import {Technology} from "../models/technology";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

  skills: Technology[] = [
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', 'Scss'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', 'Firebase'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 'Css'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', 'Github'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 'JavaScript'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', 'Dart'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', 'Angular'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', '.NET'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', 'SQLite'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 'NodeJS'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', 'C#'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 'TypeScript'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', 'Flutter'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', 'Java'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 'HTML'),
    new Technology('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 'MySQL'),
  ];

  constructor(public fireService: FireService) {
  }
  async ngOnInit() {
  }

  //TODO RESPONSIVE
}
