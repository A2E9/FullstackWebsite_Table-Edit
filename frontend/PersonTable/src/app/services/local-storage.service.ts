import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  map = new Map<string, any>();

  constructor() { }
  //DO NOT USE LOCALSTORAGE
  
  public saveData(key: string, obj: any) {
  localStorage.setItem(key, JSON.stringify(obj));
    // this.map.set(key, obj);
  }
  public getData(key: string) {
    return localStorage.getItem(key);
    // return this.map.get(key);
  }





  
  public saveObject(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }



  public getObject(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
