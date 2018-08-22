import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import { Joke } from '../Joke';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  
  @Output() jokeCreated :EventEmitter<Joke> = new EventEmitter();
  constructor() { }

  createJoke(setup:string,punchline:string){
    this.jokeCreated.emit(new Joke(setup,punchline));
  }

  ngOnInit() {
  }


}
