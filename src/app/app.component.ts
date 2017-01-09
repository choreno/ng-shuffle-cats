import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';


  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  cards: any[] = [
    {text: 'Spade A'},
    {text: 'Spade 2'},
    {text: 'Spade 3'},
    {text: 'Spade 4'},
    {text: 'Spade 5'},
    {text: 'Spade 6'},
    {text: 'Spade 7'},
    {text: 'Spade 8'},
    {text: 'Spade 9'},
    {text: 'Spade 10'},
    {text: 'Spade J'},
    {text: 'Spade Q'},
    {text: 'Spade K'},

    {text: 'Diamond A'},
    {text: 'Diamond 2'},
    {text: 'Diamond 3'},
  ]

}
