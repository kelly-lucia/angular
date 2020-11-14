import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TableComponent implements OnInit {
  listOfData = [];
  widthConfig = [];
  listOfSelection = [];

  dropDown = true;
  constructor() {}

  ngOnInit(): void {
    this.widthConfig = [
      '100px',
      '100px',
      '100px',
      '100px',
      '100px',
      '100px',
      '100px',
      '100px',
      '150px',
    ];
    this.listOfData = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
    ];

    this.listOfSelection = [
      {
        text: '编辑列',
        onSelect: (e) => {
          console.log(e);
        },
      },
      {
        text: '删除列',
        onSelect: () => {},
      },
    ];
  }
}
