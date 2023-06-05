import {Component} from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  emailGroup = new FormGroup({
    nameControl: new FormControl('', [Validators.required]),
    emailControl: new FormControl('', [Validators.required, Validators.email]),
    messageControl: new FormControl('', [Validators.required,])
  });

  constructor(private _snackBar: MatSnackBar) {
  }

  //TODO RESPONSIVE
  public sendEmail() {
    const templateParams = this.emailGroup.value;

    let dto = {
      to_name: 'Andy',
      from_name: templateParams.nameControl + '',
      message: templateParams.messageControl + '',
      reply_to: templateParams.emailControl + '',
    }

    emailjs.send('service_2xbvwlp', 'template_1hws3ik', dto, 'TRVsMPygUOntKby-i')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this._snackBar.open('Mail send!😊', '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3000
        });
      }, (error) => {
        console.log(error.text);
      });

  }
}
