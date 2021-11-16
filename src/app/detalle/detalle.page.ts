import { Component, OnInit, Input } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  listad = [];
  persona : String;
  constructor(private api : ApirestService, private alertController: AlertController,
    private toastController: ToastController,private activatedRouter : ActivatedRoute,private crud: CrudService,  private router      : Router,) { }
    
  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(async p => {
      this.persona = p.get('id');
    })
    this.leer();     
  }
  async leer() {
    await this.api.getUsercomen(this.persona);
    this.listad = this.api.listado;
    console.log("metodo leer" + this.listad);
    console.log(this.persona);
  }
  
  salir(){
    localStorage.clear();
    this.listad = [];
    this.router.navigateByUrl('/login')}

}
