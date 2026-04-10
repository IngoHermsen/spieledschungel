import { AfterViewInit, effect, inject, Injectable, signal } from '@angular/core';
import { KeyControlService } from './key-control';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private keyControlService = inject(KeyControlService);

  activeModal = signal(false);
  navIsOpen = signal(false);
  isMobile: boolean = false;
  isPortrait: boolean = false;

  constructor() {
    this.isMobile = window.innerWidth < 768;
    this.isPortrait = window.innerWidth < window.innerHeight;

    effect(() => {
      if (this.keyControlService.matchingKey() === 'Escape') {
        this.closeModal();
      }
    });

    this.openModal()
  }

  openModal() {
    document.body.style.overflowY = 'hidden';
    this.keyControlService.setKeyListeners();
    this.activeModal.set(true);
  }

  closeModal() {
    document.body.style.overflowY = '';
    this.keyControlService.stopKeyListeners();
    this.activeModal.set(false);
  }
}
