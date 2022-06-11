import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions2 = [
    {id: 1, name: 'Europe'},
    {id: 2, name: 'Americas'},
    {id: 3, name: 'Asia'},
    {id: 4, name: 'Middle East and Africa'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
