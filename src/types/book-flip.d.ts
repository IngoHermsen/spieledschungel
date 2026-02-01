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
    flipNext(): void;
    flipPrev(): void;
    turnToPage(page: number): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
  }
}
