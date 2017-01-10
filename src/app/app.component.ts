import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cards: any[] = [
    { number: 'ace', type: 'spades' },
    { number: '2', type: 'spades' },
    { number: '3', type: 'spades' },
    { number: '4', type: 'spades' },
    { number: '5', type: 'spades' },
    { number: '6', type: 'spades' },
    { number: '7', type: 'spades' },
    { number: '8', type: 'spades' },
    { number: '9', type: 'spades' },
    { number: '10', type: 'spades' },
    { number: 'jack', type: 'spades' },
    { number: 'queen', type: 'spades' },
    { number: 'king', type: 'spades' },

    { number: 'ace', type: 'diamonds' },
    { number: '2', type: 'diamonds' },
    { number: '3', type: 'diamonds' },
    { number: '4', type: 'diamonds' },
    { number: '5', type: 'diamonds' },
    { number: '6', type: 'diamonds' },
    { number: '7', type: 'diamonds' },
    { number: '8', type: 'diamonds' },
    { number: '9', type: 'diamonds' },
    { number: '10', type: 'diamonds' },
    { number: 'jack', type: 'diamonds' },
    { number: 'queen', type: 'diamonds' },
    { number: 'king', type: 'diamonds' },

    { number: 'ace', type: 'hearts' },
    { number: '2', type: 'hearts' },
    { number: '3', type: 'hearts' },
    { number: '4', type: 'hearts' },
    { number: '5', type: 'hearts' },
    { number: '6', type: 'hearts' },
    { number: '7', type: 'hearts' },
    { number: '8', type: 'hearts' },
    { number: '9', type: 'hearts' },
    { number: '10', type: 'hearts' },
    { number: 'jack', type: 'hearts' },
    { number: 'queen', type: 'hearts' },
    { number: 'king', type: 'hearts' },


    { number: 'ace', type: 'clubs' },
    { number: '2', type: 'clubs' },
    { number: '3', type: 'clubs' },
    { number: '4', type: 'clubs' },
    { number: '5', type: 'clubs' },
    { number: '6', type: 'clubs' },
    { number: '7', type: 'clubs' },
    { number: '8', type: 'clubs' },
    { number: '9', type: 'clubs' },
    { number: '10', type: 'clubs' },
    { number: 'jack', type: 'clubs' },
    { number: 'queen', type: 'clubs' },
    { number: 'king', type: 'clubs' },



  ]

}
