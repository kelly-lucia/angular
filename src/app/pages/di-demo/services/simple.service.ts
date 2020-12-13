import { Injectable } from '@angular/core';

@Injectable()
export class SimpleService {
  constructor() {

  }

  log():void{
    console.log('This is SimpleService');
  }
}
