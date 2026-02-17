import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AudioService {
  private audio = new Audio();

  // Signals für State
  isPlaying = signal(false);

  constructor() {
    this.audio.addEventListener('play', () => {
      this.isPlaying.set(true);
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying.set(false);
    });
  }

  init() {
    this.audio.src = 'assets/music/sd-song.aac';
    this.audio.volume = 0.3;
    this.audio.load();
  }

  togglePlay() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

}

