import { AfterViewInit, Component, ElementRef, inject, ViewChild, signal, OnInit, effect } from '@angular/core';
import { PageFlip } from 'book-flip';
import { ViewService } from '../../services/view-service';
import { Books } from '../../services/books';
import { KeyControlService } from '../../services/key-control';

type PageState = 'start' | 'middle' | 'end';

@Component({
  selector: 'app-book-flip',
  imports: [],
  templateUrl: './book-flip.html',
  styleUrl: './book-flip.scss',
})
export class BookFlip implements AfterViewInit {
  private viewService = inject(ViewService);
  private keyControlService = inject(KeyControlService)
  public bookService = inject(Books);

  @ViewChild('book') book!: ElementRef<HTMLElement>;

  public currentPage = signal(1);
  public isPortrait = signal(false);
  public pageCount = signal(0);
  public pageFlipReady = signal(false);
  public pageState: PageState = 'start';

  private pageFlip!: PageFlip;

  constructor() {
    effect(() => {
      const key = this.keyControlService.matchingKey();
      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        this.handleKeyControl(key)
      }
    })
  }

  ngAfterViewInit(): void {
    const bookWidthFraction: number = this.viewService.isMobile ? window.innerWidth * 0.9 : window.innerWidth * 0.6;
    const bookHeightFraction: number = window.innerHeight * 0.7;
    const calcMinWidth: number = this.viewService.isMobile ? bookWidthFraction : bookWidthFraction / 2;
    const calcMaxHeight: number = this.viewService.isMobile ? bookHeightFraction : bookHeightFraction / 2;

    this.pageFlip = new PageFlip(this.book.nativeElement, {
      width: 800,
      height: 1200,
      minWidth: calcMinWidth,
      maxHeight: calcMaxHeight,
      size: 'stretch',
      usePortrait: this.viewService.isMobile,
      mobileScrollSupport: false,
      flippingTime: 1500,
    });

    this.isPortrait.set(this.viewService.isMobile);

    this.pageFlip.loadFromHTML(
      Array.from(this.book.nativeElement.children) as HTMLElement[]
    );

    this.pageFlip.on('init', event => {
      this.currentPage.set(this.pageFlip.getCurrentPageIndex());
      this.pageCount.set(this.pageFlip.getPageCount());
      this.pageFlipReady.set(true);
    })

    this.pageFlip.on('flip', event => {
      const page: number = this.pageFlip.getCurrentPageIndex();
      this.currentPage.set(page);
      this.updatePageState(page);
    })
  }

  flipPrevPage() {
    this.keyControlService.matchingKey.set(null);
    this.pageFlip.flipPrev();
  }

  flipNextPage() {
    this.keyControlService.matchingKey.set(null);
    this.pageFlip.flipNext();
  }

  turnToPage(page: number) {
    this.pageFlip.turnToPage(page);
  }

  updatePageState(page: number) {
    if (page == 0) {
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
      ? page >= pageCount
      : page >= pageCount - 1;
  }

  pageIndexIsEven(index: number): boolean {
    return index % 2 > 0;
  }

  // key control events

  handleKeyControl(key: string) {
    switch (key) {
      case 'ArrowLeft': this.flipPrevPage();
        break;
      case 'ArrowRight': this.flipNextPage()
    }

  }

}
