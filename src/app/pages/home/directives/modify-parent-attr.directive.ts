import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

interface StyleMap {
  style: string;
  value: string;
}

interface AttrMap {
  attr: string;
  value: string;
}
// 修改父元素的指定属性
@Directive({
  selector: '[appModifyParentAttr]',
})
export class ModifyParentAttrDirective implements AfterViewInit {
  // 需要修改的父元素的属性名,或者样式
  @Input() styleMap: StyleMap[] = [];

  @Input() attrMap: AttrMap[] = [];

  @Input() rightNow = true;

  @HostListener('click')
  onClick(): void {
    this.changeStyleOrAttr();
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private render2: Renderer2
  ) {}

  ngAfterViewInit(): void {
    if (this.rightNow) {
      this.changeStyleOrAttr();
    }
  }

  changeStyleOrAttr(): void {
    const parentEl = this.render2.parentNode(this.el.nativeElement);
    this.styleMap.forEach((item) => {
      this.render2.setStyle(parentEl, item.style, item.value);
    });
    this.attrMap.forEach((item) => {
      this.render2.setAttribute(parentEl, item.attr, item.value);
    });
  }
}
