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

  /**
   * The :active selector is used to select and style the active link.
   * A link becomes active when you click on it.
   *
   * The onmousedown event occurs when a user presses a mouse button over an HTML element.
   *
   * The requirement asks to use the :active css class,
   * I preferred to use the mousedown event to be able to create my custom directive and separate the :hover and :active
   * operations in a more clearly defined way.
   *
   * However, I left the :active class as a comment in the job.component.css file
   */
  @HostListener('mousedown') mouseDown(): void {
    this.backgroundColor = 'blue';
  }

  private getColor(): string {
    if (this.isFavorite) {
      return this.highlightColor;
    } else {
      return this.DEFAULT_COLOR;
    }
  }

}
