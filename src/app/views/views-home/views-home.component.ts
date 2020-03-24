import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: "# of Users" },
    { value: 456, label: "Revenue" },
    { value: 55, label: "Review" }
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Coach',
      description: 'Das ist fantastish Coach'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is an atique dresser'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
