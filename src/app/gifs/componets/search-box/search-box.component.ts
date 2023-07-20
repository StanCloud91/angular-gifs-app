import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
     <h5>Buscar</h5>
     <input type="text"
      class='form-control'
      placeholder="Buscar gifs....."
      (keyup.enter)="searchTag2()"
      #txtTaginput
      name="" id="">
  `
})

export class SearchBoxComponent  {

  @ViewChild('txtTaginput')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(public gifsService:GifsService){

  }

  searchTag(newTag:string){
    console.log(newTag);
  }

  searchTag2(){
    let newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    console.log(newTag);
    this.tagInput.nativeElement.value='';

  }
}
