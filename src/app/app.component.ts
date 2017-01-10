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
  initialProbability: number ; //users will have the 7 cards each for starting game
  probability: number;

  constructor(private _cardService: CardService) { }


  toggleCardDisplay(index: number) {

    //For discarded cards
    if (this.cards[index].status === CardStatus.Decked) {
      this.cards[index].isDisplay = !this.cards[index].isDisplay;
      this.cards[index].status = CardStatus.Discarded;

      this.probability = this.updateProbability(this.numberOfCards--);

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
    
    var numberOfUserCards = 14; //two users will have the 7 cards each for starting game
    var probability = 100 / (currentNumberOfCards - numberOfUserCards);

    if (currentNumberOfCards == numberOfUserCards || currentNumberOfCards < numberOfUserCards) {
      probability = 100;
    }

    return probability;
  };

  ngOnInit() {

    this._cardService.getAllCards().subscribe(cards => this.cards = cards,
      err => console.log(err),
      () => {
        this.numberOfCards = this.cards.length;
        this.probability = this.updateProbability(this.numberOfCards) ;
        this.initialProbability = this.probability;         
      });

  }


}
