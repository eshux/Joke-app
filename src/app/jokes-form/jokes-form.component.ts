import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-jokes-form',
  templateUrl: './jokes-form.component.html',
  styleUrls: ['./jokes-form.component.scss']
})

export class JokesFormComponent {
  @Input() inputValue: {
    question: string,
    answer: string,
  };

  @Output() add = new EventEmitter();

  addJoke(): void {
    this.add.emit();
  }
}
