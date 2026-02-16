import { Component, inject } from '@angular/core';
import { Navigation } from './components/navigation/navigation';
import { RouterOutlet } from '@angular/router';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [Navigation, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  
}
