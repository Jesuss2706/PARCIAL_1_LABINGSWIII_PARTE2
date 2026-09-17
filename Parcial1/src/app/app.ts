import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Navbar } from './shared/navbar/navbar';
import { Home } from './home/home';

@Component({
  imports: [RouterOutlet, Header, Footer, Navbar, Home],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Parcial1');
}
