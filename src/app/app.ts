import { Component, effect, inject, OnInit } from '@angular/core';
import { Navigation } from './components/navigation/navigation';
import { BookFlip } from './components/book-flip/book-flip';
import { MediaControls } from './components/media-controls/media-controls';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { ViewService } from './services/view-service';
import { KeyControlService } from './services/key-control';
import { AudioService } from './services/audio-service';

@Component({
  selector: 'app-root',
  imports: [Navigation, BookFlip, MediaControls, RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements OnInit {
  viewService = inject(ViewService);
  keyControlService = inject(KeyControlService);
  audioService = inject(AudioService);

  controlKey: string | null = null;

  constructor() {
    effect(() => {
      if (this.keyControlService.matchingKey() === 'Escape') {
        this.closeModal();
        // this.keyControlService.matchingKey.set(null); // reset Signal
      }
    })
  }

  ngOnInit(): void {
    this.audioService.init();
    this.keyControlService.setKeyListeners();
  }

  openModal() {
    this.keyControlService.setKeyListeners();
    this.viewService.activeModal.set(true);
  }

  closeModal() {
    this.keyControlService.stopKeyListeners();
    this.viewService.activeModal.set(false);
  }
}
