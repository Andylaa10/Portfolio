import firebase from 'firebase/compat/app';

export class TechnologyKeys{
  static technology = 'Technology';
  static skillIcon = 'skillIcon';
  static skillName = 'skillName';
}
export class Technology{
   skillIcon: string;
   skillName: string;

   constructor(skillIcon: string, skillName: string) {
     this.skillName = skillName;
     this.skillIcon = skillIcon;
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

export class TechnologyConverter implements DataConverter<Technology>{
  fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>): Technology {
    const data = snapshot.data() as Technology;
    return data;
  }

  toFirestore(technology: Technology): DocumentData  {
    return {
      skillName: technology.skillName,
      skillIcon: technology.skillIcon,
    }
  };

}
