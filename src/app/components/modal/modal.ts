import { Component, inject, OnInit } from '@angular/core';
import { MediaControls } from '../media-controls/media-controls';
import { ViewService } from '../../services/view-service';
import { KeyControlService } from '../../services/key-control';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  imports: [MediaControls],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  public router = inject(Router);
  public viewService = inject(ViewService);
  private keyControlService = inject(KeyControlService);

  showWebsite(showWebsite: boolean) {
    if (showWebsite) {
      this.viewService.closeModal();
    }
  }

  goToAudioStory() {
    this.viewService.journeyStarted = true;
    this.router.navigate(['hoer-reise']);
    this.viewService.closeModal();
  }
}
