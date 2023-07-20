import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {



  constructor(public gifsService:GifsService) {
    this.searchFirst();
  }

  get tagsHistory(){

    return [...this.gifsService.tagsHistory];
  }

  searchTag2(tag:string):void{
    let newTag = tag;
    this.gifsService.searchTag(newTag);
    console.log(newTag);

  }

  searchFirst():void{
    if(!this.gifsService.tagsHistory[0]) return;
    this.searchTag2(this.gifsService.tagsHistory[0]);
  }

}
