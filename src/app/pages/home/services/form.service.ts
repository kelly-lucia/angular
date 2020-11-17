import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  age = 11;
  page = '空';

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'kelly') {
          observer.next({ errorMsg: '不可以输入kelly' });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  constructor() {}
}
