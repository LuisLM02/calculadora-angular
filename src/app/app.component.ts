import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operacion: string = "";


  agregarCaracter(caracter : string): void {
    if (this.operacion.substring(this.operacion.length - 1) === '+' && caracter === '+') return;
    if (this.operacion.substring(this.operacion.length - 1) === '-' && caracter === '-') return;
    this.operacion += caracter;
  }
  calcularResultado(){
    this.operacion = eval(this.operacion).toString();
  }
  borrarOperacion(){
    this.operacion = this.operacion = '';
  }
  borrarCaracter(){
    this.operacion = this.operacion.substring(0, this.operacion.length - 1);
  }
}
