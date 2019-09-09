import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import {
    Router
} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    bodyRequest:Observable<any>;

    constructor(private alertCtrl: AlertController, private storage: Storage, public loadingController: LoadingController) {}

    async presentAlert(errorMessage) {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: errorMessage,
          buttons: ['OK']
        });
        await alert.present();
      }

    // Intercepts all HTTP requests!
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let token = this.storage.get('token')

        console.log(token);

        return next.handle(req).pipe(retry(1), catchError((error: HttpErrorResponse) =>{
            let errorMessage = '';
            if(error.error instanceof ErrorEvent){
                errorMessage = 'Error: ${error.error.message}';
            }else{
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            this.presentAlert(errorMessage);
            return throwError(errorMessage);
        }));
    }
    
}