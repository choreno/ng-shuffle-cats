import { Component, OnInit } from '@angular/core';

import { CardService } from './services/card.service';
import { ICard } from './interfaces/card.interface';
import { CardStatus } from './enums/card.status';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  cards: ICard[];
  selectedCard: ICard;
  isVisible: boolean = true;

  numberOfCards: number;
  initialProbability: number; //users will have the 7 cards each for starting game
  probability: number;

  constructor(private _cardService: CardService) { }


  toggleCardDisplay(index: number) {


    switch (this.cards[index].status) {
      case CardStatus.Decked:
        this.cards[index].isDisplay = !this.cards[index].isDisplay;
        this.cards[index].status = CardStatus.Discarded;
        this.numberOfCards--;
        this.probability = this.updateProbability(this.numberOfCards);
        break;

      case CardStatus.Discarded:
        this.cards[index].isDisplay = !this.cards[index].isDisplay;
        this.cards[index].status = CardStatus.Opponent;
        this.cards[index].isOpponentCard = true;
        this.numberOfCards++;
        this.probability = this.updateProbability(this.numberOfCards);
        break;

      case CardStatus.Opponent:

        this.cards[index].status = CardStatus.Decked;
        this.cards[index].isOpponentCard = false;
        break;

    }

  };

  resetCards(): void {

    for (var card of this.cards) {
      card.isDisplay = true;
    }

    this.probability = this.initialProbability;

  };


  onSelect(card: ICard): void {

    this.selectedCard = card;

  };

  updateProbability(currentNumberOfCards): number {

    var probability = 100 / currentNumberOfCards;

    if (currentNumberOfCards <= 0) {
      probability = 100;
    }

    return probability;
  };

  ngOnInit() {

    this._cardService.getAllCards().subscribe(cards => this.cards = cards,
      err => console.log(err),
      () => {
        this.numberOfCards = (this.cards.length - 7);
        this.probability = this.updateProbability(this.numberOfCards);
        this.initialProbability = this.probability;
      });

  }


}
