import { Component, inject, OnInit } from '@angular/core';
import { MediaControls } from '../media-controls/media-controls';
import { ViewService } from '../../services/view-service';
import { AudioService } from '../../services/audio-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigation',
  imports: [MediaControls],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements OnInit {
  router = new Router()
  viewService = inject(ViewService);
  audioService = inject(AudioService);

  navIsOpen: boolean = false;
  isMuted: boolean = true;
  hasStarted: boolean = false;

  ngOnInit(): void {
  }

  handleNavClick(action: string, target?: string) {

    switch(action) {
      case 'openModal': this.viewService.openModal();
      break;
      case 'link': () => {this.router.navigate([`/${target}`]); this.navIsOpen = false}
      break;
      case 'subMenu': console.log("openSubMenu")
    }


  }

  toggleNav() {
    this.navIsOpen = !this.navIsOpen;
  }

}


