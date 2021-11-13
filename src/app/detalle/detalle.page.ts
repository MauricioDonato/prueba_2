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
 
  constructor(private api : ApirestService, private alertController: AlertController,
    private toastController: ToastController,private activatedRouter : ActivatedRoute,private crud: CrudService,  private router      : Router,) { }
    listado = [];
  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(p => {
      const id = p.get('id');
      console.log(id);
      this.api.getUsercomen(String(id));})
      this.listado = this.api.listado
     

  }
  salir(){
    localStorage.clear();
    this.router.navigateByUrl('/login')

  }
}
