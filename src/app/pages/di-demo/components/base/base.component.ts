import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.less']
})
export abstract class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abstract log();
}
