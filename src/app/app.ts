import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Navigation } from './components/navigation/navigation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Navigation, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  
}
