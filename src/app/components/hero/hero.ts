import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  private readonly elementRef = inject(ElementRef);
  readonly isCvMenuOpen = signal(false);

  toggleCvMenu(): void {
    this.isCvMenuOpen.update((isOpen) => !isOpen);
  }

  closeCvMenu(): void {
    this.isCvMenuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  closeCvMenuOnOutsideClick(event: MouseEvent): void {
    if (event.target instanceof Node && !this.elementRef.nativeElement.contains(event.target)) {
      this.closeCvMenu();
    }
  }

  @HostListener('document:keydown.escape')
  closeCvMenuOnEscape(): void {
    this.closeCvMenu();
  }
}
