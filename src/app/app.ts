import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Navigation } from './components/navigation/navigation';
import { BookFlip } from './components/book-flip/book-flip';
import { RouterOutlet } from '@angular/router';
import { ViewService } from './services/view-service';
import { AudioService } from './services/audio-service';

@Component({
  selector: 'app-root',
  imports: [Navigation, BookFlip, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  viewService = inject(ViewService);
  audioService = inject(AudioService);

  activeModal: boolean = true;

  
  ngOnInit(): void {
    this.audioService.init();
  }

  closeModal() {
    console.log('was here')
    this.viewService.activeModal.set(false);
  }

  
}
