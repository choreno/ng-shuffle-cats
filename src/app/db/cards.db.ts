import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICard } from '../interfaces/card.interface';

export class CardsDb implements InMemoryDbService {

    createDb() {

        let cards: ICard[] = [];

        let types = ['spades', 'diamonds', 'hearts', 'clubs'];
        let ids = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

        for (let type of types) {
            for (let id of ids) {
                let card = {
                    id: id,
                    type: type,
                    isDisplay: true,
                    status: 'decked'   //decked, discarded,opponent
                }
                cards.push(card); 
            }
        }

        // let xcards = [
        //     { number: 'ace', type: 'spades', displayStatus: true },
        //     { number: '2', type: 'spades', displayStatus: true },
        //     { number: '3', type: 'spades', displayStatus: true },
        //     { number: '4', type: 'spades', displayStatus: true },
        //     { number: '5', type: 'spades', displayStatus: true },
        //     { number: '6', type: 'spades', displayStatus: true },
        //     { number: '7', type: 'spades', displayStatus: true },
        //     { number: '8', type: 'spades', displayStatus: true },
        //     { number: '9', type: 'spades', displayStatus: true },
        //     { number: '10', type: 'spades', displayStatus: true },
        //     { number: 'jack', type: 'spades', displayStatus: true },
        //     { number: 'queen', type: 'spades', displayStatus: true },
        //     { number: 'king', type: 'spades', displayStatus: true },

        //     { number: 'ace', type: 'diamonds', displayStatus: true },
        //     { number: '2', type: 'diamonds', displayStatus: true },
        //     { number: '3', type: 'diamonds', displayStatus: true },
        //     { number: '4', type: 'diamonds', displayStatus: true },
        //     { number: '5', type: 'diamonds', displayStatus: true },
        //     { number: '6', type: 'diamonds', displayStatus: true },
        //     { number: '7', type: 'diamonds', displayStatus: true },
        //     { number: '8', type: 'diamonds', displayStatus: true },
        //     { number: '9', type: 'diamonds', displayStatus: true },
        //     { number: '10', type: 'diamonds', displayStatus: true },
        //     { number: 'jack', type: 'diamonds', displayStatus: true },
        //     { number: 'queen', type: 'diamonds', displayStatus: true },
        //     { number: 'king', type: 'diamonds', displayStatus: true },

        //     { number: 'ace', type: 'hearts', displayStatus: true },
        //     { number: '2', type: 'hearts', displayStatus: true },
        //     { number: '3', type: 'hearts', displayStatus: true },
        //     { number: '4', type: 'hearts', displayStatus: true },
        //     { number: '5', type: 'hearts', displayStatus: true },
        //     { number: '6', type: 'hearts', displayStatus: true },
        //     { number: '7', type: 'hearts', displayStatus: true },
        //     { number: '8', type: 'hearts', displayStatus: true },
        //     { number: '9', type: 'hearts', displayStatus: true },
        //     { number: '10', type: 'hearts', displayStatus: true },
        //     { number: 'jack', type: 'hearts', displayStatus: true },
        //     { number: 'queen', type: 'hearts', displayStatus: true },
        //     { number: 'king', type: 'hearts', displayStatus: true },

        //     { number: 'ace', type: 'clubs', displayStatus: true },
        //     { number: '2', type: 'clubs', displayStatus: true },
        //     { number: '3', type: 'clubs', displayStatus: true },
        //     { number: '4', type: 'clubs', displayStatus: true },
        //     { number: '5', type: 'clubs', displayStatus: true },
        //     { number: '6', type: 'clubs', displayStatus: true },
        //     { number: '7', type: 'clubs', displayStatus: true },
        //     { number: '8', type: 'clubs', displayStatus: true },
        //     { number: '9', type: 'clubs', displayStatus: true },
        //     { number: '10', type: 'clubs', displayStatus: true },
        //     { number: 'jack', type: 'clubs', displayStatus: true },
        //     { number: 'queen', type: 'clubs', displayStatus: true },
        //     { number: 'king', type: 'clubs', displayStatus: true },

        //]


        return { cards };
        
    }


}