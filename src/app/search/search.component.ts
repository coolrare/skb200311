import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  search = new EventEmitter<any>();

  keyword = '';
  keyword2 = '';

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(msg: string) {
    this.keyword2 = this.keyword = msg;
    this.search.emit(msg);
  }

}
