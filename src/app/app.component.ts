import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  jokes = [
    {
      id: '1',
      question: 'What do you call a cow in an earthquake?',
      answer: 'A milkshake!',
    },
    {
      id: '2',
      question: 'What do you call a priest who becomes a lawyer?',
      answer: 'A father-in-law!',
    },
    {
      id: '3',
      question: 'What do you call a fake noodle?',
      answer: 'Impasta!',
    },
  ];

  inputValue = {
    answer: '',
    question: '',
  };

  addJoke(): void {
    if (this.inputValue.answer && this.inputValue.question) {
      this.jokes.push({
        id: uuidv4(),
        question: this.inputValue.question,
        answer: this.inputValue.answer,
      });

      this.inputValue.question = '';
      this.inputValue.answer = '';
    }
  }

  deleteJoke(id: string): void {
    const index = this.jokes.findIndex(item => item.id === id);
    this.jokes.splice(index, 1);
  }
}
