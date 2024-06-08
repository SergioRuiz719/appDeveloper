import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/*Para poder usar elementos personalizados*/
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/*Importación de nuestro componente generado para hacer toda la parte lógica y poderlo mostar mediante <ion-app>*/
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { FormsModule } from '@angular/forms';

/*Importacion de los componentes de Firebase para poder guardar datos en la nube*/
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent, ListaNumerosComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
