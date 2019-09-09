import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})

export class ApiSoundShareService {

  authenticationState = new BehaviorSubject(false);
  
  baseUrl: string = 'http://localhost:8000/';
  
  constructor(private httpClient : HttpClient, private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    })
   }
  
  //CRUD Sounds
  
  public getSounds(){
    return this.httpClient.get('http://localhost:8000/sounds').pipe(map( data => data['hydra:member']));
  }

  public getImage(IRI){
    return this.httpClient.get('http://localhost:8000/sound_images/' + IRI).pipe(map( data => data));
  } 

  public postSounds(form){
    return this.httpClient.post('http://localhost:8000/sounds', form).pipe(map( data => data));
  }

  public deleteSound(id){
    return this.httpClient.delete('http://localhost:8000/sounds/' + id).subscribe(data => console.log(data));
  }


  //Authentification

  checkToken(){
    this.storage.get(TOKEN).then(result => {
      if(result){
        this.authenticationState.next(true);
      }
    })
  }
  
  public postLogin(form){
    
    return this.httpClient.post('http://localhost:8000/logins', form).pipe(tap( 
      data =>{
        this.storage.set(TOKEN, 'Bearer ' + data['token']).then(()=>
        this.authenticationState.next(true)),
        console.log(this.storage.get(TOKEN))
      }));
  }

  public postRegister(form){

    return this.httpClient.post('http://localhost:8000/users', form).pipe(tap( 
      data => {
        this.storage.set(TOKEN, 'Bearer ' + data['token']).then(()=>
        this.authenticationState.next(true)),
        console.log(this.storage.get(TOKEN));
      }));
  }

  public postLogout() {
    return this.storage.remove(TOKEN).then(() => {
      this.authenticationState.next(false),
      console.log(this.storage.get(TOKEN));
    });
  }

}


