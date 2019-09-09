import { Component, OnInit } from '@angular/core';
import { ApiSoundShareService } from '../services/api-sound-share.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private ApiSoundShareService: ApiSoundShareService, private router: Router) { }

  sendRegister(form){

    if(form.username === null || form.password === null){
      return Observable.throw("Please insert credentials.");
    }else{
      this.ApiSoundShareService.postRegister(form.value).subscribe(data =>{
        this.router.navigate(['home']);
      })
    }
  }

  ngOnInit() {}

}
