import { Component, effect, inject, OnInit } from '@angular/core';
import { Navigation } from './components/navigation/navigation';
import { BookFlip } from './components/book-flip/book-flip';
import { MediaControls } from './components/media-controls/media-controls';
import { RouterOutlet } from '@angular/router';
import { ViewService } from './services/view-service';
import { KeyControlService } from './services/key-control';

@Component({
  selector: 'app-root',
  imports: [Navigation, BookFlip, MediaControls, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements OnInit {
  viewService = inject(ViewService);
  keyControlService = inject(KeyControlService);

  controlKey: string | null = null;

  constructor() {
    effect(() => {
      console.log('matichingKey in App component')
      if(this.keyControlService.matchingKey() === 'Escape') {
        this.closeModal()
      }
    })
  }

  ngOnInit(): void {
    this.keyControlService.setKeyListeners();
  }

  closeModal() {
    this.keyControlService.stopKeyListeners
    this.viewService.activeModal.set(false);
  }
}
