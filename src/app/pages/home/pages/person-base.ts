import { OnInit } from '@angular/core';

export class PersonBaseComponent implements OnInit {
  name: string; // 姓名
  age: number; // 年龄
  workYear = 0; // 工龄
  wordPlace: string; // 工作地址
  constructor() {}

  ngOnInit(): void {}
}
