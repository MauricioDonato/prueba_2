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
  dato: any;
  constructor(private api : ApirestService, private alertController: AlertController,
    private toastController: ToastController,private activatedRouter : ActivatedRoute,private crud: CrudService,  private router          : Router,) { }
  
  async ngOnInit() {

  }
  ionViewWillEnter(){
    
  }
  listar(){
    this.dato = localStorage.getItem("1");
    this.api.getUserPost(this.dato);
    this.listado = this.api.listado;
     
  }

  
  salir(){
    localStorage.clear();
    this.listado = [];
    this.router.navigateByUrl('/login')

  }

}