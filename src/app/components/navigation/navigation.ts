import { Component, inject } from '@angular/core';
import { ViewService } from '../../services/view-service';
import { AudioService } from '../../services/audio-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
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

  handleNavigation(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    });
  }
}
