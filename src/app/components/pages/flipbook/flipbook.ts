import { Component, inject } from '@angular/core';
import { ViewService } from '../../../services/view-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flipbook',
  imports: [RouterLink],
  templateUrl: './flipbook.html',
  styleUrl: './flipbook.scss',
})
export class Flipbook {
  public viewService = inject(ViewService)

}
