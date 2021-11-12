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
  constructor(private api : ApirestService, private alertController: AlertController,
    private toastController: ToastController,private activatedRouter : ActivatedRoute,private crud: CrudService,  private router          : Router,) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(p => {
      const id = p.get('id');
      console.log(id);
      this.api.getUserPost(String(id));})
      
      this.listado = this.api.listado
  }

}
