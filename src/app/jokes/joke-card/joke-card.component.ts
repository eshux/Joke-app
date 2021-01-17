import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent {
  @Input() jokes: Joke;
  @Output() delete = new EventEmitter();

  showAnswer = false;

  deleteJoke(): void {
      this.delete.emit();
  }
}
