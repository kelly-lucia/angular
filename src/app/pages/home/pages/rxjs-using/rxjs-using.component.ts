import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subscriber,
  of,
  from,
  fromEvent,
  empty,
  interval,
  timer,
} from 'rxjs';
import {
  take,
  first,
  takeLast,
  takeUntil,
  startWith,
  concat,
  pluck,
  skip,
  materialize,
  timeout,
  timeoutWith,
  count,
  delayWhen,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-using',
  templateUrl: './rxjs-using.component.html',
  styleUrls: ['./rxjs-using.component.less'],
})
export class RxjsUsingComponent implements OnInit {
  // observable$ = new Subject<any>();
  constructor() {}

  ngOnInit(): void {
    /**
     * 创建
     */
    this.creatObserve()
      .pipe(startWith('爱你呀'))
      .subscribe((res) => {
        console.log('create', res);
      });

    // pluck类似于 map，但仅用于选择每个发出对象的某个嵌套属性。
    this.ofUsing()
      .pipe(takeLast(1), pluck('name'))
      .subscribe((res) => {
        console.log('of,pluck，takeLast', res);
      });

    this.fromUsing()
      .pipe()
      .subscribe(
        (res) => {
          console.log('from,', res);
        },
        null,
        () => {
          console.log('complete');
        }
      );

    this.fromEventUsing()
      .pipe(concat(this.emptyUsing()))
      .subscribe(
        (res) => {
          console.log('fromEvent,empty', res);
        },
        null,
        () => {
          console.log('complete');
        }
      );

    this.emptyUsing()
      .subscribe(
        (res) => {
          console.log('empty', res);
        },
        null,
        () => {
          console.log('complete');
        }
      );

    this.intervalUsing()
      .pipe(skip(2), take(3))
      .subscribe(
        (res) => {
          console.log('interval', res);
        },
        null,
        () => {
          console.log('complete');
        }
      );

    // materialize 将源Observable的nexterror或complete通知发出next通知
    this.timerUsing()
      .pipe(
        takeUntil(this.fromEventUsing()),
        materialize(),
        timeoutWith(500, this.fromUsing()),
        timeout(500),
        count()
      )
      .subscribe(
        (res) => {
          console.log('timer', res);
        },
        (err) => {
          console.log('error', err);
        },
        () => {
          console.log('timercomplete');
        }
      );
  }

  /**
   * 创建一个可观察对象
   */
  creatObserve(): Observable<string> {
    return Observable.create((observe: Subscriber<string>) => {
      observe.next('value');
      observe.complete();
    });
  }

  /**
   * of的使用
   */

  ofUsing(): Observable<any> {
    return of({ name: '林黛玉' }, { name: '贾宝玉' });
  }

  /**
   * from的使用
   */

  fromUsing(): Observable<string | number> {
    return from(['Jerry', 'Anna', 2016, 2017, '30 days']);
  }

  /**
   * fromEvent的使用(监听)
   */

  fromEventUsing(): Observable<Event> {
    return fromEvent(document.body, 'click');
  }

  /**
   * empty的使用
   */
  emptyUsing(): Observable<any> {
    return empty();
  }

  intervalUsing(): Observable<any> {
    return interval(1000);
  }

  timerUsing(): Observable<any> {
    return timer(0, 1000);
  }
}
