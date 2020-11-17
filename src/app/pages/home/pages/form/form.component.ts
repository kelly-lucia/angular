import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  providers: [FormService],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.myForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(private fb: FormBuilder, public formService: FormService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [null, [Validators.required]],
      enName: [
        null,
        [Validators.pattern('[a-zA-Z]*')],
        this.formService.userNameAsyncValidator,
      ],
      adult: [null, [Validators.requiredTrue]],
      telPhone: [null, [Validators.minLength(3), Validators.maxLength(11)]],
      age: [null, [Validators.min(18), Validators.max(40)]],
      email: [null, [Validators.email]],
      hobby: [null, [Validators.nullValidator]],
      height: this.fb.control(null, [
        Validators.compose([Validators.min(150), Validators.max(190)]),
      ]),
    });
  }

  onSubmit(): void {
    console.log(this.formService.page);
    this.formService.page = 'form';
    console.log(this.formService.page);
    // tslint:disable-next-line: forin
    for (const i in this.myForm.controls) {
      this.myForm.controls[i].markAsDirty();
      this.myForm.controls[i].updateValueAndValidity();
    }
  }
}
