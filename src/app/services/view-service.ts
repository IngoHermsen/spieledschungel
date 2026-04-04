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

  constructor() {
    this.isMobile = window.innerWidth < 768;

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
