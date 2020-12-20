import {
  Component,
  OnInit,
  Inject,
  Optional,
  InjectionToken,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  Type,
  AfterViewInit,
} from '@angular/core';
import { TestComponent } from './components/test/test.component';

const BASE_URL = new InjectionToken<string>('baseUrl');
const TEST = new InjectionToken<QuestionCmp>('test');

interface QuestionCmp {
  name: string;
  cmp: Type<any>;
  type: string;
}

const QUESTION = {
  name: 'testCmp',
  cmp: TestComponent,
  type: 'test',
};

@Component({
  selector: 'app-di-demo',
  templateUrl: './di-demo.component.html',
  styleUrls: ['./di-demo.component.less'],
  providers: [
    {
      provide: BASE_URL,
      useFactory: () => {
        return '随便写写';
      },
    },
    {
      provide: TEST,
      useValue: QUESTION,
    },
  ],
})
export class DiDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('testHost', { read: ViewContainerRef, static: true })
  testHost: ViewContainerRef;

  componentFactory: ComponentFactory<any>;
  componentRef: ComponentRef<any>;

  constructor(
    @Optional() @Inject(BASE_URL) private url,
    @Optional() @Inject(TEST) private question: QuestionCmp,
    private rosolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.componentFactory = this.rosolver.resolveComponentFactory(
      this.question.cmp
    );
    this.componentRef = this.testHost.createComponent(this.componentFactory);
  }

  log(): void {
    console.log('This is DiDemoComponent');
  }
}
