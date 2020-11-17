import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-programmer',
  templateUrl: './programmer.component.html',
  styleUrls: ['./programmer.component.less'],
})
export class ProgrammerComponent extends FormComponent implements OnInit {
  constructor(fb: FormBuilder, formService: FormService) {
    super(fb, formService);
  }

  onSubmit(): void {
    console.log(this.formService.page);
    this.formService.page = 'programmer';
    console.log(this.formService.page);
    console.log('enName', this.myForm.controls.enName);
    console.log('height', this.myForm.controls.height);
  }
}
