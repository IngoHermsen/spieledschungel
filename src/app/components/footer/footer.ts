import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ViewService } from '../../services/view-service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  public viewService = inject(ViewService);
  
  public showMap: boolean = false;
}
