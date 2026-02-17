import { Component, inject } from '@angular/core';
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

  activeModal: boolean = true;

  closeModal() {
    console.log('was here')
    this.viewService.activeModal.set(false);
  }

  
}
