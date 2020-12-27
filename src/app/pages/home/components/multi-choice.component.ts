import {
  Component,
  Input,
  forwardRef,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { AnswerItem, ChoiceQuestion } from '../home.definitions';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-multi-choice',
  template: `
    <nz-checkbox-wrapper
      (nzOnChange)="onCheckChange($event)"
      [class.mobile]="mode === 'mobile'"
    >
      <ng-container *ngFor="let option of question.optionlist">
        <label
          nz-checkbox
          [nzValue]="option.optioncode"
          [class.checked]="checkedList.includes(option.optioncode)"
          >{{ option.optionname }}</label
        >
      </ng-container>
    </nz-checkbox-wrapper>
  `,
  styles: [
    `
      .mobile.ant-checkbox-group {
        display: block;
        width: 100%;
      }

      label {
        display: block;
        padding: 5px 0;
      }

      .ant-checkbox-wrapper + .ant-checkbox-wrapper {
        margin: 0;
      }

      .mobile .ant-checkbox-wrapper {
        height: 44px;
        border-radius: 3px;
        border: 1px solid #cfd1dc;
        line-height: 40px;
        color: #626262;
        margin: 7px;
        padding: 0 14px;
      }

      .mobile .ant-checkbox-wrapper.checked {
        background: #e9eeff;
        border-color: #7490e7;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiChoiceComponent),
      multi: true,
    },
  ],
})
export class MultiChoiceComponent {
  @Input() question: ChoiceQuestion;
  @Input() mode: 'web' | 'mobile' = 'web';

  mapOfCheckCode: { [prop: string]: boolean } = {};

  checkedList: string[] = [];
  constructor(
    private render: Renderer2,
    private elementRef: ElementRef<HTMLElement>
  ) {}

  onCheckChange(checkedList: string[]): void {
    this.checkedList = checkedList;
  }

  getChoice(): AnswerItem {
    return {
      titlecode: this.question.titlecode,
      titlesubcode: this.question.titlesubcode,
      optionvalue: this.checkedList,
    };
  }

  writeValue(): void {}

  registerOnChange(): void {}

  registerOnTouched(): void {}

  // setDisabledState(isDisabled: boolean): void {
  //   this.render.setProperty(
  //     this.elementRef.nativeElement,
  //     'disabled',
  //     isDisabled
  //   );
  // }
}
