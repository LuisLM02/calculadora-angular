import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  operacion: string = "";

  getElement(event: Event): void {
    if ((<HTMLElement>event.target).innerHTML === '=') {
      this.operacion = eval(this.operacion).toString();
      return;
    }
    if ((<HTMLElement>event.target).innerHTML === 'C') {
      this.operacion = this.operacion = '';
      return;
    }
    if ((<HTMLElement>event.target).innerHTML === '←') {
      this.operacion = this.operacion.substring(0, this.operacion.length - 1);
      return;
    }
    if (this.operacion.substr(-1) === '+' && (<HTMLElement>event.target).innerHTML === '+') return;
    if (this.operacion.substr(-1) === '-' && (<HTMLElement>event.target).innerHTML === '-') return;


    this.operacion += (<HTMLElement>event.target).innerHTML;
  }
}
