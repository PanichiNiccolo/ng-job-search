import {Directive, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appStarHighlight]',
  standalone: true
})
export class StarHighlightDirective implements OnInit, OnChanges{

  private readonly DEFAULT_COLOR: string = 'black';

  @Input('appStarHighlight') highlightColor: string = 'red'
  @Input('isFavorite') isFavorite: boolean = false;

  @HostBinding('style.backgroundColor') backgroundColor: string = this.DEFAULT_COLOR;
  @HostBinding('style.cursor') cursor: string = 'auto';

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.getColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isFavorite']) {
      this.backgroundColor = this.getColor();
    }
  }

  @HostListener('mouseenter') mouseOver(): void {
    this.backgroundColor = this.highlightColor;
    this.cursor = 'pointer';
  }

  @HostListener('mouseleave') mouseLeave(): void {
    this.backgroundColor = this.getColor();
    this.cursor = 'auto';
  }

  private getColor(): string {
    if (this.isFavorite) {
      return this.highlightColor;
    } else {
      return this.DEFAULT_COLOR;
    }
  }

}
