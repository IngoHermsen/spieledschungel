import { Component, inject, OnInit } from '@angular/core';
import { MediaControls } from '../media-controls/media-controls';
import { ViewService } from '../../services/view-service';
import { AudioService } from '../../services/audio-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [MediaControls, RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  router = new Router();
  viewService = inject(ViewService);
  audioService = inject(AudioService);
  activeSubMenu: string | null = null;

  showNav: boolean = false;
  isMuted: boolean = true;
  hasStarted: boolean = false;

  handleNavClick(route: string) {
    this.router.navigate([route]);
  }
}
