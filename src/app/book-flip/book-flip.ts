import { AfterViewInit, Component, ElementRef, inject, ViewChild, Signal, signal } from '@angular/core';
import { PageFlip } from 'book-flip';
import { ViewService } from '../services/view-service';

type PageState = 'first' | 'middle' | 'last';

@Component({
  selector: 'app-book-flip',
  imports: [],
  templateUrl: './book-flip.html',
  styleUrl: './book-flip.scss',
})
export class BookFlip implements AfterViewInit {
  public currentPage = signal(1);
  public pageCount = signal(0);
  public pageFlipReady = signal(false);
  public pageState: PageState = 'first';

  private viewService = inject(ViewService);
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

    this.pageFlip.loadFromHTML(
      Array.from(this.book.nativeElement.children) as HTMLElement[]
    );

    this.pageFlip.on('init', e => {
        this.currentPage.set(this.pageFlip.getCurrentPageIndex() + 1);
        this.pageCount.set(this.pageFlip.getPageCount());
        this.pageFlipReady.set(true);
    })

    this.pageFlip.on('flip', e => {
        const page: number = this.pageFlip.getCurrentPageIndex() + 1;
        this.currentPage.set(page);
        this.updatePageState(page)
    })

  }

  flipPrevPage() {
    this.pageFlip.flipPrev();
  }

  flipNextPage() {
    this.pageFlip.flipNext();
  }

  updatePageState(page: number) {
    if(page == 1) {
      this.pageState = 'first'; 
    } else if(page == this.pageCount()) {
      this.pageState = 'last';
    } else {
      this.pageState = 'middle'
    }
  }

  calculatedPageWidth(): number {
    return window.innerWidth / 100 * 85;
  }


}
