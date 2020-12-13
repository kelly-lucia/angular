import { Component, OnInit, InjectionToken, Injector } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    // this.testMock();
    const BASE_URL = new InjectionToken<string>('baseUrl');
    const injector = Injector.create({
      providers: [{ provide: BASE_URL, useValue: '随便写写' }],
    });
    console.log('injector', injector);
    // const url = injector.get('BASE_URL');
    // expect(url).toBe('http://localhost');
  }

  testMock(): void {
    console.log('发起了请求');
    this.httpService.getList().subscribe((res) => {
      console.log(res);
    });
  }
}
