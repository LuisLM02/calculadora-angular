import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-numero',
  templateUrl: './boton-numero.component.html',
  styleUrls: ['./boton-numero.component.css']
})
export class BotonNumeroComponent implements OnInit {
  @Input() numero: string;

  constructor() { }

  ngOnInit(): void {
  }
}
