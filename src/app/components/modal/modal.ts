import { Component, inject } from '@angular/core';
import { MediaControls } from '../media-controls/media-controls';
import { ViewService } from '../../services/view-service';
import { KeyControlService } from '../../services/key-control';

@Component({
  selector: 'app-modal',
  imports: [MediaControls],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  public viewService = inject(ViewService);
  private keyControlService = inject(KeyControlService);


}
