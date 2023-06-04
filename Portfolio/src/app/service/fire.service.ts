import {Injectable} from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import * as config from '../../../firebaseConfig.js';
import {Project, ProjectConverter, ProjectKeys} from "../models/project";
import {Technology, TechnologyConverter, TechnologyKeys} from "../models/technology";

@Injectable({
  providedIn: 'root'
})

export class FireService {
  firebaseApplication;
  firestore: firebase.firestore.Firestore;
  storage: firebase.storage.Storage;


  projects: Project[] = [];
  technologies: Technology[] = [];

  constructor() {
    this.firebaseApplication = firebase.initializeApp(config.firebaseConfig);
    this.firestore = firebase.firestore();
    this.storage = firebase.storage();
  }

  // async getProjects() {
  //   await this.firestore.collection(ProjectKeys.project).withConverter(new ProjectConverter()).onSnapshot(snapshot => {
  //     snapshot.docChanges().forEach(change => {
  //       if (change.type == "added") {
  //         this.projects.push(change.doc.data() as Project);
  //       }
  //       if (change.type == 'modified') {
  //         const index = this.projects.findIndex(proj => proj.projectId == change.doc.data()[ProjectKeys.projectId])
  //         this.projects[index] = change.doc.data() as Project;
  //       }
  //       if (change.type == 'removed') {
  //         this.projects = this.projects.filter(proj => proj.projectId != change.doc.data()[ProjectKeys.projectId]);
  //       }
  //     });
  //   });
  // }
  //
  // async getSkills() {
  //   await this.firestore.collection(TechnologyKeys.technology).withConverter(new TechnologyConverter()).onSnapshot(snapshot => {
  //     snapshot.docChanges().forEach(change => {
  //       if(change.type == 'added'){
  //         this.technologies.push(change.doc.data() as Technology);
  //       }
  //       if(change.type == 'modified'){
  //         const index = this.technologies.findIndex(tech => tech.skillId == change.doc.data()[TechnologyKeys.skillId]);
  //         this.technologies[index] = change.doc.data() as Technology
  //       }
  //       if(change.type == 'removed'){
  //         this.technologies = this.technologies.filter(tech => tech.skillId != change.doc.data()[TechnologyKeys.skillId]);
  //       }
  //     });
  //   });
  // }
  //
  // getSkill(id: string): Technology{
  //   if(id == null || id == undefined){
  //     throw new Error(`No skill with the ${id} found`)
  //   }else{
  //     return this.technologies.find(tec => tec.skillId == id)!;
  //   }
  // }
  //
  // getProject(id: string): Project{
  //   if(id == null || id == undefined){
  //     throw new Error(`No skill with the ${id} found`)
  //   }else{
  //     return this.projects.find(proj => proj.projectId == id)!;
  //   }
  // }
}
