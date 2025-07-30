import { Component, Input } from '@angular/core';
import { Flashcard } from '../flashcard.model';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent {
  @Input() card!: Flashcard;
  flipped = false;

  flip() {
    this.flipped = !this.flipped;
  }
}