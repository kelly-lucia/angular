import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FormComponent } from '../home/pages/form/form.component';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../home/services/form.service';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent
  extends FormComponent
  implements OnInit, AfterViewInit {
  @ViewChild('node', { static: true }) node: ElementRef;

  href = '';
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

  ngAfterViewInit(): void {
    this.domToImage();
  }

  domToImage(): void {
    domtoimage
      .toPng(this.node.nativeElement)
      .then((dataUrl) => {
        this.href = dataUrl;
        // const img = new Image();
        // img.src = dataUrl;
        // document.body.appendChild(img);
        const link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  }
}
