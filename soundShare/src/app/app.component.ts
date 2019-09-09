import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiSoundShareService } from 'C:/Projets/soundShare/src/app/services/api-sound-share.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ApiSoundShareService: ApiSoundShareService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.ApiSoundShareService.authenticationState.subscribe(state => {
        if (state) {
        this.router.navigate(['home']);
        }
        if(state == false) {
        this.router.navigate(['login']);
        }
        });
    });
  }
}
