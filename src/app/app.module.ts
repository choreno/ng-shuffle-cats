import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//angular material
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

//routing
import { AppRoutingModule } from './router/app.routing.module';

//rxjs
import './rxjs/rxjs.extensions';

//webApi
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CardsDb } from './db/cards.db';

//service
import { CardService } from './services/card.service';

//components
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(CardsDb, { delay: 0 })

  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
