import { Component, effect, inject } from '@angular/core';
import { Navigation } from './components/navigation/navigation';
import { BookFlip } from './components/book-flip/book-flip';
import { MediaControls } from './components/media-controls/media-controls';
import { RouterOutlet } from '@angular/router';
import { ViewService } from './services/view-service';

@Component({
  selector: 'app-root',
  imports: [Navigation, BookFlip, MediaControls, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  viewService = inject(ViewService);

  constructor() {
    effect((onCleanup) => {
      if (this.viewService.activeModal()) {
        const listener = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            this.closeModal()
          }
        }
        document.addEventListener('keydown', listener);
        // Cleanup at modal view update

        onCleanup(() => {
          document.removeEventListener('keydown', listener)
        })
      }
    })
  }

  closeModal() {
    this.viewService.activeModal.set(false);
  }


}
