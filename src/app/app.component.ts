import { Component, OnInit } from '@angular/core';
import { Post } from './shared/Post';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';

  keyword = '';
  data = [];

  constructor(private datasvc: DataService) { }

  ngOnInit(): void {
    this.data = this.datasvc.data;
  }

  doSearch(keyword) {
    this.data = this.datasvc.doSearch(keyword);
  }
}
