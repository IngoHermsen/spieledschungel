import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ViewService } from '../../services/view-service';
import { AudioService } from '../../services/audio-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements OnInit {
  viewService = inject(ViewService);
  audioService = inject(AudioService);

  navIsOpen: boolean = false;
  isMuted: boolean = true;
  hasStarted: boolean = false;

  ngOnInit(): void {
    this.audioService.init();
  }

  toggleNav() {
    this.navIsOpen = !this.navIsOpen;
  }

}


