import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './componets/search-box/search-box.component';
import { CardListComponent } from './componets/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  exports:[
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
