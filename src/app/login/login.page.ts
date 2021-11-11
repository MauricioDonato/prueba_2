import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private api : ApirestService, private alertController: AlertController,
    private toastController: ToastController,private activatedRouter : ActivatedRoute ) { }
  listado = [];
  nombreUsuario = "";
  fonoUsuario = "";
  rutUsuario = "";

  ngOnInit() {
    this.api.getUsers()
    
    
  }
  async ingresar(nombre :HTMLInputElement, contrasena: HTMLInputElement){
      var contra_v = "1234";
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
      


  }


}
