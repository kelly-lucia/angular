import { Component, OnInit, Inject, Optional, forwardRef } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { UserService } from './services/user.service';
import { BetterLoggerService } from './services/better-logger.service';
import { SimpleService } from './services/simple.service';

@Component({
  selector: 'app-di-demo',
  templateUrl: './di-demo.component.html',
  styleUrls: ['./di-demo.component.less'],
  // providers: [UserService, LoggerService],
  providers: [
    SimpleService,
    UserService,
    {
      provide: LoggerService,
      useClass: LoggerService,
    },
  ],
})
export class DiDemoComponent implements OnInit {
  constructor(
    @Optional() @Inject('URL') private url,
    // private user: UserService,
    // @Inject(forwardRef(()=> SimpleService)) private simple
    private simple: SimpleService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.logger.log();
  }

  log(): void {
    console.log('This is DiDemoComponent');
  }
}
