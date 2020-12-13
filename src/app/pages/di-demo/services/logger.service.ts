import { Injectable, Inject, forwardRef } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class LoggerService {
  constructor(
    private userService: UserService
    // @Inject(forwardRef(() => UserService)) private userService: UserService
  ) {
    // console.log('This is LoggerService');
    this.getUser();
  }

  log(msg?: string):void {
    console.log(msg || 'This is LoggerService');
  }

  getUser():void {
    const user = this.userService.getUser();
    console.log('user', user);
  }
}
