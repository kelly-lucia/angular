import { Injectable, Inject, forwardRef } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class LoggerService {
  constructor(
  ) {
  }

  log(msg?: string):void {
    console.log(msg || 'This is LoggerService');
  }
}
