import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})


// 9.	HeroesComponent: használja a HeroService -t a Hero példányok lekéréséhez. Jelenítse meg a Hero[] elemeit, egy táblázatban egymás alatt.

export class HeroesComponent implements OnInit {

  @Input() hero: Hero = new Hero;

  heroList: Hero[] = this.heroService.herolist;

  constructor(private heroService: HeroService) { 
    
   }

  ngOnInit(): void {
  }

}


