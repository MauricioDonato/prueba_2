import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) {
    this.init();
  }
  async init()
  {
    // crear el storage de ionic para este proyecto
    await this.storage.create();
  }
  async set(key:any, valor: any)
  {
    await this.storage.set(key, valor);
  }    
  async get(key:string)
  {
    return await this.storage.get(key);
  }
  listar()
  {
    let fila = [];
    this.storage.forEach((v, k) => { fila.push(v); })
    return fila;
  }
  eliminar(id:string)
  {// eliminar no lo hace
    this.storage.remove(id);
  }
}
