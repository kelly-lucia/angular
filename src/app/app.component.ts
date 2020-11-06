import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private httpService: HttpService) {
    setTimeout(() => {
      this.testMock();
    }, 5000);
  }

  testMock(): void {
    console.log('发起了请求');
    this.httpService.getList().subscribe((res) => {
      console.log(res);
    });
  }
}
