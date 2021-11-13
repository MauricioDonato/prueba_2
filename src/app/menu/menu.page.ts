import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  listado = [];
  datos: any;
  constructor(private api : ApirestService, private alertController: AlertController,
    private toastController: ToastController,private activatedRouter : ActivatedRoute,private crud: CrudService,  private router          : Router,) { }
  
  ngOnInit() { 
  }
  listar(){
    for(let id = 1; id <= localStorage.length; id++){
      this.datos = localStorage.getItem(id.toString())
     
    }
     this.api.getUserPost(this.datos);
     this.listado = this.api.listado;
  }
  comentario(id : HTMLInputElement){
    var con = this.crud.get.length + 1;
    this.crud.set(String(con), id.value);
    this.router.navigateByUrl('/' + String(id.value))
    
  }
  
  salir(){
    localStorage.clear();
    this.router.navigateByUrl('/login')

  }

}