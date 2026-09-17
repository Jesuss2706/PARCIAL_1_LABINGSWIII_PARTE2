import { Component } from '@angular/core';
import { Carrusel } from '../carrusel/carrusel';

@Component({
  imports: [Carrusel],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
