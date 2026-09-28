import { AfterViewInit, effect, inject, Injectable, signal } from '@angular/core';
import { KeyControlService } from './key-control';
import { AudioService } from './audio-service';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private audioService = inject(AudioService)
  private keyControlService = inject(KeyControlService);
  public navigationHeight: number = 0;
  public reducedContent: boolean = false;
  public previousRoute: string | null = null;
  public currentRoute: string | null = null;
  

  public transparentContentBackground = signal(false);

  navIsOpen = signal(false);
  isMobile: boolean = false;
  isPortrait: boolean = false;

  constructor() {
    this.isMobile = window.innerWidth < 768;
    this.isPortrait = window.innerWidth < window.innerHeight;

    effect(() => {
      if (this.keyControlService.matchingKey() === 'Escape') {
        // this.closeModal();
      }
    });

    this.openModal()
  }

  openModal() {
    this.audioService.audio.pause();
  }

  closeModal() {
    document.body.style.overflowY = '';
  }

  openAudioStory() {
    console.log("open Audio Story")
        window.open('/pages/hoer-reise', '_blank');
  }
}
