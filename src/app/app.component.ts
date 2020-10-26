import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [null, [Validators.required]],
      enName: [null, [Validators.pattern('[a-zA-Z]*')]],
      adult: [null, [Validators.requiredTrue]],
      telPhone: [null, [Validators.minLength(3), Validators.maxLength(11)]],
      age: [null, [Validators.compose([Validators.min(18), Validators.max(40)])]],
      email: [null, [Validators.email]],
      hobby: [null, [Validators.nullValidator]],
      height: [null, [Validators.compose([Validators.min(150), Validators.max(190)])]]
    });
  }

  onSubmit(): void {

    console.log('name', this.myForm.controls.name);
    console.log('adult', this.myForm.controls.adult);
    // tslint:disable-next-line: forin
    for (const i in this.myForm.controls) {
      this.myForm.controls[i].markAsDirty();
      this.myForm.controls[i].updateValueAndValidity();
    }
  }
}
