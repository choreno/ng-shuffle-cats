import { Component, OnInit } from '@angular/core';

import { CardService } from './services/card.service';
import { ICard } from './interfaces/card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  cards: ICard[];
  selectedCard: ICard;
  isVisible: boolean = true;
  possibility: number; 

  constructor(private _cardService: CardService) { }


  toggleCardDisplay(cardIndex: number) {
    this.cards[cardIndex].isDisplay = !this.cards[cardIndex].isDisplay;
  }

  resetCards(): void {

    for(var card of this.cards){
      card.isDisplay = true; 
    }

  };


  onSelect(card: ICard): void {

    this.selectedCard = card;

  }

  ngOnInit() {
    this._cardService.getAllCards().subscribe(cards => this.cards = cards,
      err => console.log(err),
      () => console.log('loading cards, done'))
  }

  
}
