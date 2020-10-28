import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

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
    })

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.myForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [null, [Validators.required]],
      enName: [null, [Validators.pattern('[a-zA-Z]*')], this.userNameAsyncValidator],
      adult: [null, [Validators.requiredTrue]],
      telPhone: [null, [Validators.minLength(3), Validators.maxLength(11)]],
      age: [null, [Validators.min(18), Validators.max(40)]],
      email: [null, [Validators.email]],
      hobby: [null, [Validators.nullValidator]],
      height: this.fb.control(null, [Validators.compose([Validators.min(150), Validators.max(190)])], this.userNameAsyncValidator)
    });
  }

  onSubmit(): void {

    console.log('enName', this.myForm.controls.enName);
    console.log('height', this.myForm.controls.height);
    // tslint:disable-next-line: forin
    for (const i in this.myForm.controls) {
      this.myForm.controls[i].markAsDirty();
      this.myForm.controls[i].updateValueAndValidity();
    }
  }

}
