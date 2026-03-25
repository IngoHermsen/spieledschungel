import { Component, inject } from '@angular/core';
import { ViewService } from '../../services/view-service';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
  public viewService = inject(ViewService);
}
