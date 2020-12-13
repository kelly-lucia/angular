import { Injectable, Inject, forwardRef } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {
  user = 'Kelly Cao';
  constructor(
    private logger: LoggerService
  ) // @Inject(forwardRef(() => LoggerService)) private logger: LoggerService
  {
    this.log();
  }

  log(): void {
    this.logger.log(`${this.user}:This is BetterLoggerService`);
  }

  getUser(): string {
    return this.user;
  }
}
