import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
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
export class Navigation implements AfterViewInit {
@ViewChild('navigation') navigation!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const height = this.navigation.nativeElement.offsetHeight;
    this.viewService.navigationHeight = height
  }

  router = new Router();
  viewService = inject(ViewService);
  audioService = inject(AudioService);
  activeSubMenu: string | null = null;

  showNav: boolean = false;
  isMuted: boolean = true;
  hasStarted: boolean = false
}
