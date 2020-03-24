import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'James', age: 25, job: 'Dedigner' },
    { name: 'Jill', age: 34, job: 'Enginer' },
    { name: 'Elyse', age: 30, job: 'Enginer'}
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
