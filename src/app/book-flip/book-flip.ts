import { AfterViewInit, Component, ElementRef, inject, ViewChild, Signal, signal } from '@angular/core';
import { PageFlip } from 'book-flip';
import { ViewService } from '../services/view-service';
import { Books } from '../services/books';
import { FlipHint } from "../directives/flip-hint";

type PageState = 'start' | 'middle' | 'end';

@Component({
  selector: 'app-book-flip',
  imports: [FlipHint],
  templateUrl: './book-flip.html',
  styleUrl: './book-flip.scss',
})
export class BookFlip implements AfterViewInit {
  public currentPage = signal(1);
  public isPortrait = signal(false);
  public pageCount = signal(0);
  public pageFlipReady = signal(false);
  public pageState: PageState = 'start';

  private viewService = inject(ViewService);
  public bookService = inject(Books);

  @ViewChild('book') book!: ElementRef<HTMLElement>;

  private pageFlip!: PageFlip;
  pageWidth: number = this.viewService.isMobile ? this.calculatedPageWidth() : 400;
  pageHeight: number = this.pageWidth * 1.5;

  ngAfterViewInit(): void {
    this.pageFlip = new PageFlip(this.book.nativeElement, {
      width: this.pageWidth,
      height: this.pageHeight,
      size: 'fixed',
      usePortrait: this.viewService.isMobile,
      mobileScrollSupport: this.viewService.isMobile,
      flippingTime: 1500,
    });

    this.isPortrait.set(this.viewService.isMobile);

    this.pageFlip.loadFromHTML(
      Array.from(this.book.nativeElement.children) as HTMLElement[]
    );

    this.pageFlip.on('changeOrientation', e => {
      console.log(e.data)
    })


    this.pageFlip.on('init', e => {
      this.currentPage.set(this.pageFlip.getCurrentPageIndex() + 1);
      this.pageCount.set(this.pageFlip.getPageCount());
      this.pageFlipReady.set(true);
    })

    this.pageFlip.on('flip', e => {
      const page: number = this.pageFlip.getCurrentPageIndex() + 1;
      this.currentPage.set(page);
      this.updatePageState(page);
    })
  }

  flipPrevPage() {
    this.pageFlip.flipPrev();
  }

  flipNextPage() {
    this.pageFlip.flipNext();
  }

  turnToPage(page: number) {
    this.pageFlip.turnToPage(page);
  }

  calculatedPageWidth(): number {
    return window.innerWidth / 100 * 85;
  }

  updatePageState(page: number) {
    if (page == 1) {
      this.pageState = 'start';
    } else if (this.isLastPage(page)) {
      this.pageState = 'end';
    } else {
      this.pageState = 'middle'
    }

  }

  isLastPage(page: number): boolean {
    const pageCount = this.pageCount();

    return this.isPortrait()
      ? page >= pageCount - 1
      : page >= pageCount - 2;
  }

}
