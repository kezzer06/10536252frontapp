import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(public api: ApiService) { }

  getAllAdverts(callback: any){
    this.api.serverCall("GET", "/api/adverts", null, (data: any)=>{
      callback(data);
    });
  }

  getMyAdverts(id: string, callback: any){
    this.api.serverCall("GET", "/api/myAdverts/"+id, {}, (data: any)=>{
      callback(data);
    });
  }

  createAd(title: string, description: string, author: string, featuredImage:string ,callback: any){
    let date = new Date();
    this.api.serverCall("POST", "/api/createAd", {title: title, description: description, featuredImage: featuredImage, author: author, lastUpdated: date, dateCreated: date }, (data: any)=>{
      callback(data);
    });


 }
}

