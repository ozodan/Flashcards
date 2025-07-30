import { Component } from '@angular/core';
import { Flashcard } from './flashcard.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flashcards: Flashcard[] = [];
  question = '';
  answer = '';

  addFlashcard() {
    if (this.question.trim() && this.answer.trim()) {
      this.flashcards.push({ question: this.question.trim(), answer: this.answer.trim() });
      this.question = '';
      this.answer = '';
    }
  }
}