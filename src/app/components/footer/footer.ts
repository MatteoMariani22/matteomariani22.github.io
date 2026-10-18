import { Component, HostListener, OnDestroy, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer implements OnDestroy {
  readonly showBackToTop = signal(false);
  readonly scrollProgress = signal(0);
  private scrollProgressFrame: number | null = null;
  private scrollToTopFrame: number | null = null;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (typeof window === 'undefined' || this.scrollProgressFrame !== null) return;

    this.scrollProgressFrame = window.requestAnimationFrame(() => {
      this.scrollProgressFrame = null;
      this.showBackToTop.set(window.scrollY > 120);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      this.scrollProgress.set(Math.min(100, Math.max(0, progress)));
    });
  }

  scrollToTop(event: MouseEvent): void {
    event.preventDefault();
    if (typeof window === 'undefined') return;

    this.cancelScrollToTop();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    const startY = window.scrollY;
    const duration = 450;
    let startTime: number | null = null;

    const animate = (timestamp: number): void => {
      startTime ??= timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      window.scrollTo({
        top: Math.round(startY * (1 - easedProgress)),
        behavior: 'instant',
      });

      if (progress < 1) {
        this.scrollToTopFrame = window.requestAnimationFrame(animate);
      } else {
        this.scrollToTopFrame = null;
      }
    };

    this.scrollToTopFrame = window.requestAnimationFrame(animate);
  }

  @HostListener('window:wheel')
  @HostListener('window:touchstart')
  cancelScrollToTopOnUserInput(): void {
    this.cancelScrollToTop();
  }

  @HostListener('window:keydown', ['$event'])
  cancelScrollToTopOnScrollKey(event: KeyboardEvent): void {
    if (['ArrowDown', 'ArrowUp', 'End', 'Home', 'PageDown', 'PageUp', ' '].includes(event.key)) {
      this.cancelScrollToTop();
    }
  }

  ngOnDestroy(): void {
    if (this.scrollProgressFrame !== null) {
      window.cancelAnimationFrame(this.scrollProgressFrame);
    }
    this.cancelScrollToTop();
  }

  private cancelScrollToTop(): void {
    if (this.scrollToTopFrame !== null && typeof window !== 'undefined') {
      window.cancelAnimationFrame(this.scrollToTopFrame);
      this.scrollToTopFrame = null;
    }
  }
}
