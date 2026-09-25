import { Component, inject, OnInit } from '@angular/core';
import { ViewService } from '../../../services/view-service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  private viewService = inject(ViewService)

  ngOnInit() {
    this.viewService.transparentContentBackground.set(true)
  }

}
