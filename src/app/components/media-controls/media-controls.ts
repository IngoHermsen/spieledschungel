import { Component, inject, Input } from '@angular/core';
import { AudioService } from '../../services/audio-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-media-controls',
  imports: [NgClass],
  templateUrl: './media-controls.html',
  styleUrl: './media-controls.scss',
})
export class MediaControls {
  @Input() modalVariant: boolean = false;
  audioService = inject(AudioService);

  stopPropagation(event: Event) {
    event.stopPropagation()
  }

}
