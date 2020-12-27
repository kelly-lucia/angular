import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormService } from '../../services/form.service';
import { ChoiceQuestion } from '../../home.definitions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  providers: [FormService],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  fruitA = true;
  fruitB = false;

  multiQuestion: ChoiceQuestion = {
    titlecode: '1',
    titlename: '标题',
    titledescription: 'lalalalalalalala',
    questiontype: 0,
    optionlist: [
      {
        optioncode: '0',
        optionname: '苹果',
      },
      {
        optioncode: '1',
        optionname: '苹果1',
      },
      {
        optioncode: '2',
        optionname: '苹果2',
      },
    ],
  };

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
      fruit: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    this.formService.page = 'form';
    // tslint:disable-next-line: forin
    for (const i in this.myForm.controls) {
      this.myForm.controls[i].markAsDirty();
      this.myForm.controls[i].updateValueAndValidity();
    }
  }

  onModelChange(value: boolean): void {
    console.log(value);
    console.log('fruitA', this.fruitA);
  }

  onKyCheckChange(value: boolean): void {
    console.log(value);
    console.log('fruitB', this.fruitB);
  }
}
