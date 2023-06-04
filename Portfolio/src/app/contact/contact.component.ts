import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  //TODO RESPONSIVE
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_2xbvwlp', 'template_1hws3ik', e.target as HTMLFormElement, 'TRVsMPygUOntKby-i')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
