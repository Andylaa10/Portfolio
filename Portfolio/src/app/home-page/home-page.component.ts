import {Component, OnInit} from '@angular/core';
import {FireService} from "../service/fire.service";
import {QuoteService} from "../service/quote.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  //TODO RESPONSIVE
  close: boolean = false;

  constructor(private fireService: FireService, private quoteService: QuoteService) {
  }

  async ngOnInit() {
    //await this.fireService.getProjects();
    //console.log(this.fireService.projects);
  }

  toggleClose() {
    this.close = !this.close;
  }
  toggleFromChild(data: any){
    this.close = !data;
  }

}
