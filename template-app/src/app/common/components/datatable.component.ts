import { Component, OnInit, Input } from '@angular/core';
// import { mockUserList } from 'src/app/data/mock';
import { mockUserList } from '@data/mock';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() users = mockUserList;

  constructor() { }

  ngOnInit(): void {
  }

}
