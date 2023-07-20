import { Gif, SearchResponse } from './../interfaces/gifs.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey:string = 'exq5N4zS3XyRFZOS6HV2kdaRHs49F3oL';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';


  constructor(public http:HttpClient){
    this.loadLocalStorage();
  }
  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private saveLocalStorage():void{
    localStorage.setItem('history',  JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;
    this._tagsHistory=JSON.parse(localStorage.getItem('history')!);
  }



  public searchTag(tag:string):void{

    if(tag.length===0) return;
    tag=tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory= this._tagsHistory.filter( (oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory=this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  //   fetch("https://api.giphy.com/v1/gifs/search?api_key=exq5N4zS3XyRFZOS6HV2kdaRHs49F3oL&q=shakira&limit=10")
  // .then(response => response.json())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
  //   console.log(this._tagsHistory);

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit',10)
      .set('q',tag)
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe(resp => {
        this.gifList= resp.data;
        //console.log({gifs: this.gifList});
      })



  }

}
