import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ViewService } from '../../services/view-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements OnInit {
  @ViewChild('audioRef') audio!: ElementRef<HTMLAudioElement>;

  viewService = inject(ViewService);

  navIsOpen: boolean = false;
  isMuted: boolean = true;
  hasStarted: boolean = false;

  constructor() {

  }

  ngOnInit(): void {

  }

  toggleNav() {
    this.navIsOpen = !this.navIsOpen;
  }

  toggleMute() {
    const audioEl = this.audio.nativeElement;
    // Beim ersten Klick starten (wichtig wegen Browser-Policy)
    if (!this.hasStarted) {
      audioEl.volume = 0.3; // Lautstärke 0–1
      audioEl.play();
      this.hasStarted = true;
    }

    this.isMuted = !this.isMuted;
    audioEl.muted = this.isMuted;
  }
}


