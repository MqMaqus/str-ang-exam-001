// 8.	HeroService: készíts egy service -t, a neve hero legyen. Legyen egy getAll metódusa, ami Hero[] típussal tér vissza, és legalább 5 Hero -t szolgáltat azoknak akik meghívják.

import { ɵBrowserPlatformLocation } from '@angular/common';
import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})


export class HeroService {

  constructor() { }

  herolist: Hero[] = [
    {
      id: 1,
      name: "Batman",
      superPower: "Super wealth",
      address: "1007 Mountain Drive, Gotham"
    },
    {
      id: 2,
      name: "Superman",
      superPower: "Super strength",
      address: "1938 Sullivan Place, Metropolis"
    },
    {
      id: 3,
      name: "Green Lantern",
      superPower: "Flying",
      address: "1215 Diamond Lane, Gotham"
    },
    {
      id: 4,
      name: "Martian Manhunter",
      superPower: "Super vision",
      address: "223 Drury Lane, Middleton"
    },
    {
      id: 5,
      name: "Flash",
      superPower: "Super speed",
      address: "102 Silver Ride, Central City"
    }
  ]
    getAll() {
    return this.herolist;
  }
}
