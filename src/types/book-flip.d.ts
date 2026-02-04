declare module 'book-flip' {
  export class PageFlip {
    constructor(
      element: HTMLElement,
      settings?: {
        width?: number;
        height?: number;
        maxWidth?: number;
        maxHeight?: number;
        minWidth?: number;
        minHeight?: number;
        size?: 'fixed' | 'stretch';
        showCover?: boolean;
        maxShadowOpacity?: number;
        mobileScrollSupport?: boolean;
        usePortrait?: boolean;
        flippingTime?: number;
      }
    );

    loadFromHTML(pages: HTMLElement[]): void;
    flipNext(): void
    flipPrev(): void;
    turnToPage(page: number): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;

    on<K extends keyof PageFlipEvents>(
      event: K,
      callback: (event: PageFlipEvents[K]) => void
    ): void;
  }

  interface FlipEvent {
    data: number;
  }

  interface ChangeStateEvent {
    data: 'user_fold' | 'fold_corner' | 'read';
  }

  interface ChangeOrientationEvent {
    data: 'portrait' | 'landscape';
  }

  interface InitEvent {
    data: PageFlip;
  }

  interface PageFlipEvents {
    flip: FlipEvent;
    changeState: ChangeStateEvent;
    changeOrientation: ChangeOrientationEvent;
    init: InitEvent;
  }
}
