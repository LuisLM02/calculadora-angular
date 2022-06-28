import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  operacion:string = "";

  Sumar0(): void {
    this.operacion += 0;
  }
  Sumar1(): void {
    this.operacion += 1;
  }
  Sumar2(): void {
    this.operacion += 2;
  }
  Sumar3(): void {
    this.operacion += 3;
  }
  Sumar4(): void {
    this.operacion += 4;
  }
  Sumar5(): void {
    this.operacion += 5;
  }
  Sumar6(): void {
    this.operacion += 6;
  }
  Sumar7(): void {
    this.operacion += 7;
  }
  Sumar8(): void {
    this.operacion += 8;
  }
  Sumar9(): void {
    this.operacion += 9;
  }
  Suma(): void {
    if(this.operacion.substr(-1) === '+') return;
    this.operacion += '+';
  }
  Resta(): void {
    if(this.operacion.substr(-1) === '-') return;
    this.operacion += '-';
  }
  Delete(): void {
    this.operacion = this.operacion.substring(0, this.operacion.length - 1)
  }
  Clear(): void {
    this.operacion = '';
  }
  SumarAll(): void {
    this.operacion = eval(this.operacion).toString();
  }

}
