import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ViewService } from '../../../services/view-service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  @ViewChild('mainLogo') mainLogo!: ElementRef<HTMLElement>;

  private viewService = inject(ViewService);

  ngOnInit() {
    this.viewService.transparentContentBackground.set(true);
    this.blinkingEyes()
  };

  
  blinkingEyes() {
    const randomTimeout = Math.floor(Math.random() * (10000 - 2500 + 1)) + 2500;
    const blinkTimeout = setTimeout(() => {
      this.mainLogo.nativeElement.classList.add('hide-logo');
      setTimeout(() => {
        this.mainLogo.nativeElement.classList.remove('hide-logo');
      }, 170);

      this.blinkingEyes();
    }, randomTimeout);
  }
}
