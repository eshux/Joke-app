import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})

export class JokesComponent {
  @Input() jokes: Joke[];
  @Output() delete = new EventEmitter();

  deleteJoke(id: number): void {
    this.delete.emit(id);
  }
}
