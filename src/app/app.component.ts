import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  myForm: FormGroup;

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
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
    this.myForm = this.fb.group({
      name: [null, [Validators.required]],
      enName: [null, [Validators.pattern('[a-zA-Z]*')]],
      adult: [null, [Validators.requiredTrue]],
      telPhone: [null, [Validators.minLength(3), Validators.maxLength(11)]],
      age: [null, [Validators.min(18), Validators.max(40)]],
      email: [null, [Validators.email]],
      hobby: [null, [Validators.nullValidator]],
      height: this.fb.control(null, [Validators.compose([Validators.min(150), Validators.max(190)])], this.userNameAsyncValidator)
    });
  }

  onSubmit(): void {

    console.log('age', this.myForm.controls.age);
    console.log('height', this.myForm.controls.height);
    // tslint:disable-next-line: forin
    for (const i in this.myForm.controls) {
      this.myForm.controls[i].markAsDirty();
      this.myForm.controls[i].updateValueAndValidity();
    }
  }

}
