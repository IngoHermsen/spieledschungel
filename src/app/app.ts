import { Component, ElementRef, inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Navigation } from './components/navigation/navigation';
import { BookFlip } from './components/book-flip/book-flip';
import { MediaControls } from './components/media-controls/media-controls';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { ViewService } from './services/view-service';
import { KeyControlService } from './services/key-control';
import { AudioService } from './services/audio-service';



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

  @ViewChild('mainLogo') mainLogo!: ElementRef<HTMLElement>;
  @ViewChild('activeContent') activeContent!: ElementRef<HTMLElement>

  constructor(private ngZone: NgZone) {

  }

  ngOnInit(): void {
    this.audioService.init();
    this.keyControlService.setKeyListeners();
    this.blinkingEyes();
  }

  blinkingEyes() {
    const randomTimeout = Math.floor(Math.random() * (10000 - 2500 + 1)) + 2500;
    const blinkTimeout = setTimeout(() => {
      console.log('timeout')
      this.mainLogo.nativeElement.classList.add('hide-logo');
      setTimeout(() => {
        this.mainLogo.nativeElement.classList.remove('hide-logo')
      }, 170);

      this.blinkingEyes()
    }, randomTimeout)
  }

}
