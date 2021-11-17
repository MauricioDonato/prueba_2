import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient}  from '@angular/common/http';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  listado = [];
  datos : any;
  private apiURL = "https://jsonplaceholder.typicode.com/"

  constructor(private http : HttpClient, private crud: CrudService) { }
  getUsers()
  {
    let url = this.apiURL + 'users';
    return new Promise((resolve, reject) =>
    {
      this.http.get(url).subscribe((data: []) =>
      {
        data.forEach(item => { this.listado.push(item); });
        console.table(this.listado);
        
      },
      error => { console.log("error en la solicitud")}
      )
    })
    
  }
  
  async getUserID(id: number)
  {
    let url = this.apiURL + 'users/' + id;
    return new Promise((resolve, reject) =>
    {
      this.http.get(url).subscribe((data: any) =>
      {
        data.forEach(item => { this.listado.push(item); });
      console.table(this.listado);
     
      },
      error => { console.log("error en la solicitud")
      })
    })
  }
  getUserPost(id : String)
  { this.listado = [];
    this.datos = "";
    let url = this.apiURL + 'users/' + id + "/posts";
    return new Promise((resolve, reject) =>
    { this.http.get(url).subscribe((data: any) =>
      {
        data.forEach(item => { this.listado.push(item);  });
        for (let index = 0; index < this.listado.length ; index++) {
          
          this.crud.set(String(index), this.listado[index] );
        
        }
       ;
      }, 
      error => 
      { for (let index = 0; index < 9; index++) {
        const element = index;
        this.crud.get(String(element)).then(item => { this.listado.push(item);})
        
      }
      
        console.log(this.listado)
      })
     
    
    })
    
  }
  async getUsercomen(id : String)
  {
    this.listado = [];
    this.datos = "";
    let url = this.apiURL + "posts/" + id + "/comments";
    return new Promise((resolve, reject) =>
    {
      this.http.get(url).subscribe((data:  []) =>
      {
        resolve(data)
        data.forEach(item => { this.listado.push(item); });
        
        for (let index = 0; index < this.listado.length; index++) {
          const element = index;
          this.crud.set("post" +element, this.listado[index]);
        
        }
       ;
        
      },
      error => 
      { for (let index = 0; index < 5; index++) {
        const element = index;

        this.crud.get("post" + String(index)).then(item => { this.listado.push(item);})
        }
        console.log(this.listado)
      })
    })
    
  }
}
