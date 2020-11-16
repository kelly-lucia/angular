import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-using',
  templateUrl: './directive-using.component.html',
  styleUrls: ['./directive-using.component.less'],
})
export class DirectiveUsingComponent implements OnInit {
  public myContext = { $implicit: 'World', name: 'Kelly', localSk: 'Svet' };

  public condition = true;
  constructor() {}

  ngOnInit(): void {}
}
