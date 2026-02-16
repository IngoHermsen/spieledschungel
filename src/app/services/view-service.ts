import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  activeModal = signal(true);
  isMobile: boolean = false;

  constructor() {
    this.isMobile = window.innerWidth < 768;
  }
}
