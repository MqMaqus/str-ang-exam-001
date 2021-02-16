import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-table-row',
  templateUrl: './hero-table-row.component.html',
  styleUrls: ['./hero-table-row.component.scss']
})
export class HeroTableRowComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}

