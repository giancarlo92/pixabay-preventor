import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/cards/components/card/card.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    CardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class TemasModule { }
