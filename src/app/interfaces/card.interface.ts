import { CardStatus } from '../enums/card.status';

export class ICard {
    id:string;
    type: string;
    isDisplay: boolean; 
    status: CardStatus;
    isOpponentCard: boolean; 

}

