import {
  Component,
  Input,
  forwardRef,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ky-checkbox',
  template: `
    <label
      nz-checkbox
      [ngModel]="kyChecked"
      (ngModelChange)="onCheckChange($event)"
      [nzDisabled]="kyDisabled"
      (focus)="onFocus()"
    >
      <ng-content></ng-content>
    </label>
  `,
  styles: [
    `
      label {
        display: block;
        padding: 5px 0;
      }

      .mobile .ant-checkbox-wrapper.checked {
        background: #e9eeff;
        border-color: #7490e7;
      }
    `,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KyCheckboxComponent),
      multi: true,
    },
  ],
})
export class KyCheckboxComponent implements ControlValueAccessor {
  @Input() mode: 'web' | 'mobile' = 'web';
  @Input() @InputBoolean() kyChecked = false;
  @Input() @InputBoolean() kyDisabled = false;

  @Output() kyCheckedChange: EventEmitter<boolean> = new EventEmitter();
  @Output() kyFocus: EventEmitter<any> = new EventEmitter();

  onModelChange = (T) => {};

  // model view -> view value
  writeValue(value: any): void {
    this.kyChecked = value;
  }

  // view value ->model value
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(): void {}

  setDisabledState(isDisabled: boolean): void {}

  onCheckChange(newValue: boolean): void {
    this.kyChecked = newValue;
    this.onModelChange(newValue);

    this.kyCheckedChange.emit(newValue);
    console.log('checkchange', newValue, this.kyChecked);
  }

  onFocus(): void {
    console.log('focus');
  }
}
