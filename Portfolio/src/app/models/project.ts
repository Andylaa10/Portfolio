import {Technology} from "./technology";
import firebase from 'firebase/compat/app';

export class ProjectKeys{
  static project = 'Project';
  static projectName = 'projectName';
  static technologies = 'technologies';
}
export class Project{
  projectName: string;
  technologies: Technology[];

  constructor(projectName: string, technologies: Technology[]) {
    this.projectName = projectName;
    this.technologies = technologies;
  }
}

// Converts firestore objects into typescript object
type DataConverter<T> = firebase.firestore.FirestoreDataConverter<T>;

// Get a documents data
type DocumentData = firebase.firestore.DocumentData;

// Get a snapshot of a documents, so here you not only get the data but also metadata
type QueryDocumentSnapshot<T> = firebase.firestore.QueryDocumentSnapshot<T>;

// Gives us the options of get more than the document data example metadata
type SnapshotOptions = firebase.firestore.SnapshotOptions;

export class ProjectConverter implements DataConverter<Project>{
  fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>): Project {
    const data = snapshot.data() as Project;
    return data;
  }

  toFirestore(project: Project): DocumentData  {
    return {
      projectName: project.projectName,
      technologies: project.technologies,
    }
  };

}
