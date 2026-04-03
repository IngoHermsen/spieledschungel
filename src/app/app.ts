import { Component, effect, inject, OnInit } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Navigation } from './components/navigation/navigation';
import { BookFlip } from './components/book-flip/book-flip';
import { MediaControls } from './components/media-controls/media-controls';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { ViewService } from './services/view-service';
import { KeyControlService } from './services/key-control';
import { AudioService } from './services/audio-service';
import {MatDialogModule} from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  imports: [Navigation, BookFlip, Footer, MediaControls, RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements OnInit {
  viewService = inject(ViewService);
  keyControlService = inject(KeyControlService);
  audioService = inject(AudioService);

  controlKey: string | null = null;

  constructor() {

  }

  ngOnInit(): void {
    this.audioService.init();
    this.keyControlService.setKeyListeners();
  }

}
