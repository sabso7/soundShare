import { Component, OnInit } from '@angular/core';
import { ApiSoundShareService } from '../services/api-sound-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sound',
  templateUrl: './add-sound.page.html',
  styleUrls: ['./add-sound.page.scss'],
})
export class AddSoundPage implements OnInit {

  constructor(private ApiSoundShareService: ApiSoundShareService , private router: Router) { }

  ngOnInit() {
  }


public postSound(form){
    this.ApiSoundShareService.postSounds(form.value).subscribe();
    this.router.navigate(['home']);  
}
}
