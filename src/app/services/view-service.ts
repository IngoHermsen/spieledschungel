import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  // Mobile View Controls

  mobileViewThreshold: number = 800;
  isMobileView: boolean;

  constructor() {
    console.log('view service');
    this.isMobileView = window.innerWidth <= this.mobileViewThreshold;
  }
}
