import { effect, inject, Injectable, signal } from '@angular/core';
import { KeyControlService } from './key-control';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private keyControlService = inject(KeyControlService);

  activeModal = signal(true);
  navIsOpen = signal(false);
  isMobile: boolean = false;

  constructor() {
    this.isMobile = window.innerWidth < 768;

    effect(() => {
      if (this.keyControlService.matchingKey() === 'Escape') {
        this.closeModal();
        // this.keyControlService.matchingKey.set(null); // reset Signal
      }
    })
  }

  openModal() {
    document.body.style.overflow = 'hidden';
    this.keyControlService.setKeyListeners();
    this.activeModal.set(true);
  }

  closeModal() {
    this.keyControlService.stopKeyListeners();
    this.activeModal.set(false);
  }
}
