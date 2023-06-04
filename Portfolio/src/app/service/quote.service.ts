import { Injectable } from '@angular/core';
import {Quote} from "../models/quote";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {


  quotes: Quote[] = [];
  constructor() {
    this.getRandomQuotes();
  }

  // Get 3 random quotes from the api and pushes them into my array of quotes
   getRandomQuotes(){
     axios.get('https://api.quotable.io/quotes/random?limit=3').then(response => {
      if(response.status == 200){
        for (let i = 0; i < response.data.length; i++) {
          this.quotes.push({
            content: response.data[i]['content'],
            author: response.data[i]['author'],
          })
        }
      }else if(response.status > 200 || response.status < 200){
        throw new Error(response.data.Error);
      }
    });
  }
}
