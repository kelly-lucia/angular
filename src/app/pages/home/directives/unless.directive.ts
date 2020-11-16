import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

// 与ngif相反功能的指令

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;

  @Input() set appUnless(condition: boolean) {
    if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    } else if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

}
