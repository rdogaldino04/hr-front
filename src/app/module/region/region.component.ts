import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';
import { RegionService } from 'src/app/service/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  public regions: Array<Region> = [];

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.regionService.listByFilter().subscribe(regions => this.regions = regions);
  }

}
