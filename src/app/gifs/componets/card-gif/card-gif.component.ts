import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'card-gif',
  templateUrl: './card-gif.component.html'
})
export class CardGifComponent implements OnInit {

  @Input()
  public gif!: Gif;

  constructor(

  ) {
    console.log(this.gif);
   }

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required');

  }



}
