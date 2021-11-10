import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private api : ApirestService ) { }

  ngOnInit() {
    this.api.getUsers()
    
  }

}
