// tslint:disable max-line-length
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  list = [];

  constructor() { }

  ngOnInit(): void {
  }

}
