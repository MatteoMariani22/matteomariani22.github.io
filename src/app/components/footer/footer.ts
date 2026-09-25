import { Component, HostListener, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  readonly showBackToTop = signal(false);
  readonly scrollProgress = signal(0);

  @HostListener('window:scroll')
  @HostListener('document:scroll')
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.showBackToTop.set(window.scrollY > 120);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      this.scrollProgress.set(Math.min(100, Math.max(0, progress)));
    }
  }
}
