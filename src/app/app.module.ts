import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonNumeroComponent } from './boton-numero/boton-numero.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonNumeroComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
