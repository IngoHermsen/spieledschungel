import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { PageFlip } from 'book-flip';
import { ViewService } from '../services/view-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-book-flip',
  imports: [RouterLink],
  templateUrl: './book-flip.html',
  styleUrl: './book-flip.scss',
})
export class BookFlip implements AfterViewInit {
  private viewService = inject(ViewService);
  @ViewChild('book') book!: ElementRef<HTMLElement>;

  private pageFlip!: PageFlip;

   ngAfterViewInit(): void {
    this.pageFlip = new PageFlip(this.book.nativeElement, {
      width: 400,
      height: 600,
      size: 'fixed',
      usePortrait: this.viewService.isMobile,
      mobileScrollSupport: this.viewService.isMobile,
      flippingTime: 1500,
      // showCover: true
    });


    this.pageFlip.loadFromHTML(
      Array.from(this.book.nativeElement.children) as HTMLElement[]
    );
  }

      flipPrevPage() {
        this.pageFlip.flipPrev();
    }

      flipNextPage() {
        this.pageFlip.flipNext();
    }
}
