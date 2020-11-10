import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.testMock();
  }

  testMock(): void {
    console.log('发起了请求');
    this.httpService.getList().subscribe((res) => {
      console.log(res);
    });
  }

}
