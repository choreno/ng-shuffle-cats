import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICard } from '../interfaces/card.interface';
import { CardStatus } from '../enums/card.status';

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
                    status: CardStatus.Decked,
                    isOpponentCard: false
                }
                cards.push(card); 
            }
        }


        return { cards };
        
    }


}