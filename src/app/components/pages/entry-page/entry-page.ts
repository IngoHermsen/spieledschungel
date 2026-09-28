import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewService } from '../../../services/view-service';

@Component({
  selector: 'app-entry-page',
  imports: [RouterLink],
  templateUrl: './entry-page.html',
  styleUrl: './entry-page.scss',
})
export class EntryPage {
  public viewService = inject(ViewService)
}
