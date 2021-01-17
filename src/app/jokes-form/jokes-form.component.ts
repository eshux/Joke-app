import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-jokes-form',
  templateUrl: './jokes-form.component.html',
  styleUrls: ['./jokes-form.component.scss']
})

export class JokesFormComponent {
  @Input() jokes: Joke[];
  @Input() inputValue: {
    question: string,
    answer: string,
  };

  @Output() add = new EventEmitter();

  addJoke(): void {
    this.add.emit();
  }
}
