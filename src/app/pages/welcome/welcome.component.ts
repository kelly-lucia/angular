import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../home/pages/form/form.component';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../home/services/form.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent extends FormComponent implements OnInit {
  constructor(fb: FormBuilder, formService: FormService) {
    super(fb, formService);
  }

  onSubmit(): void {
    console.log(this.formService.page);
    this.formService.page = 'welcome';
    console.log(this.formService.page);
    console.log('enName', this.myForm.controls.enName);
    console.log('height', this.myForm.controls.height);
  }
}
