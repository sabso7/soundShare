import { Component, OnInit } from '@angular/core';
import { ApiSoundShareService } from '../services/api-sound-share.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  token:any;

  
  constructor(private ApiSoundShareService: ApiSoundShareService, private router: Router) { }
  
  sendLogin(form){

    if(form.username === null || form.password === null){
      return Observable.throw("Please insert credentials.");
    }else{
      this.ApiSoundShareService.postLogin(form.value).subscribe(data =>{
        this.router.navigate(['home']);
      })
    }    
  }

  ngOnInit() {}
  
}
