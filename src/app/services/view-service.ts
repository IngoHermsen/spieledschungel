import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  isMobile: boolean = false;

  constructor() {
    this.isMobile = window.innerWidth < 768;
  }
}
