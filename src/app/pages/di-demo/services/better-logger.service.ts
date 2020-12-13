import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';

@Injectable()
export class BetterLoggerService{

  constructor( private userService: UserService) { 
    // super();
  }

  log():void{
    const user = this.userService.user;
    // super.log(`${user}:This is BetterLoggerService`);
  }
}
