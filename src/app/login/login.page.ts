import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private api : ApirestService, private alertController: AlertController,
    private toastController: ToastController,private activatedRouter : ActivatedRoute,private crud: CrudService,  private router          : Router, ) { }
  listado = [];
  nombreUsuario = "";
  fonoUsuario = "";
  rutUsuario = "";

  ngOnInit() {
    this.api.getUsers()
    this.api.listado
    
    
  }
  async ingresar(nombre :HTMLInputElement, contrasena: HTMLInputElement){
    var id_cor;
    this.listado = this.api.listado
    var contra_v = "1234";
    var valido = false ;
    if(nombre.value.trim().length == 0  ){
      const toast = await this.toastController.create({
        message: 'Debe ingresar un nombre de usuario',
        duration: 2000,
        color : "danger",
        position : "middle"
      }) ; toast.present(); return}
      else{
        if(contrasena.value.trim().length == 0  ){
          const toast = await this.toastController.create({
            message: 'Debe ingresar un contraseña',
            duration: 2000,
            color : "danger",
            position : "middle"
          }); toast.present();
          return;

          
      }}
      
      if(contrasena.value != "1234"){
        const toast = await this.toastController.create({
          message: 'Debe ingresar un contraseña validad',
          duration: 2000,
          color : "danger",
          position : "middle"
        }); toast.present();
        return;


      }
      for(let usuario of this.listado ){
        console.log(usuario.username)
        console.log(usuario.id)
        if(usuario.username == nombre.value ){
          valido = true
          id_cor = usuario.id;
          const id = localStorage.length + 1;

          localStorage.setItem(id.toString(), usuario.id )
        }
    }

    if(valido == false){ const toast = await this.toastController.create({
      message: 'Debe ingresar un nombre valido',
      duration: 2000,
      color : "danger",
      position : "middle"
    }); toast.present();
    return;
    

    }
      
      this.router.navigateByUrl('/'+String("menu"))
    


  }


}
