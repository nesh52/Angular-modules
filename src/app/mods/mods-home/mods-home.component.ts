import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;

  items = [
    { title: "Why is the sky blue?", content: "The sky is blue because it is" },
    { title: "what does an orange taste like?", content: "Orange" },
    { title: "What color is that cat?", content: "White" }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
