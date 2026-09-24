import { Component } from '@angular/core';
import { Medicos } from '../medicos/medicos';
import { Registro } from '../registro/registro';
import { Carrusel } from '../carrusel/carrusel';

@Component({
  selector: 'app-home',
  imports: [Medicos, Registro, Carrusel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
