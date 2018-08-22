import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/Joke';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
 jokes: Joke[];
  constructor() {

    this.jokes = [new Joke("What did the cheese say when it looked in the mirror?","hello-me (Halloumi)")]; 
   }
   addJoke(joke){
     this.jokes.unshift(joke);
   }

  ngOnInit() {
  }

}
