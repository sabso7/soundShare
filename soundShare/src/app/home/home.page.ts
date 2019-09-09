import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiSoundShareService } from '../services/api-sound-share.service';
import { Router } from '@angular/router';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';

@Component({
  selector: 'app-soundShare',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  sounds: Observable<any>;
  tab = [];
  image ;
  
  
  constructor(private ApiSoundShareService: ApiSoundShareService, private router: Router) {
   }

  public Logout(){
    this.ApiSoundShareService.postLogout();
  }

  public goToAddPage(){
    this.router.navigate(['addSound']);
  }

  public getListSounds(){
    this.ApiSoundShareService.getSounds().subscribe( res => { res.forEach(element => { this.tab.push(element) }) });
    this.ApiSoundShareService.getImage(5).subscribe(data => this.image = data)
  }

  public deleteSound(id){
    this.ApiSoundShareService.deleteSound(id);
  }


  ngOnInit() {}

  ionViewWillEnter() {
    this.getListSounds();
  }

  
}