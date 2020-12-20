import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
})
export class TestComponent extends BaseComponent implements OnInit {
  a = 1;
  ngOnInit(): void {}

  log() {
    console.log('This is TestComponent');
  }
}
