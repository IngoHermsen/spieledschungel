import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Navigation } from './components/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [Header, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
