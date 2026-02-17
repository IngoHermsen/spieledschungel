import { Component, inject, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio-service';

@Component({
  selector: 'app-media-controls',
  imports: [],
  templateUrl: './media-controls.html',
  styleUrl: './media-controls.scss',
})
export class MediaControls implements OnInit {
  audioService = inject(AudioService);

  ngOnInit(): void {
    this.audioService.init();
  }
}
