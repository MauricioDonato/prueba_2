import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  listado = [];
  datos : any;
  private apiURL = "https://jsonplaceholder.typicode.com/"

  constructor(private http : HttpClient) { }
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
        data.forEach(item => { this.listado.push(item); });

      },
      error => { console.log("error en la solicitud")}
      )
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
       
      },
      error => { console.log("error en la solicitud")}
      )
    })
    
  }
}
