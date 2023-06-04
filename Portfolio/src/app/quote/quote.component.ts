import {Component, Input, OnInit} from '@angular/core';
import {QuoteService} from "../service/quote.service";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit{

  @Input() index: any;

  constructor(public quoteService: QuoteService){
  }

  ngOnInit() {
  }


}
