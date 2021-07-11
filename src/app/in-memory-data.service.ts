import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

function randn(min: number, max: number): number {
  let a = Math.floor( Math.random() * (max+1 - min) ) + min;
  return a;
}

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', attack: randn(1,10), defense: randn(1,10)},
      { id: 12, name: 'Narco', attack: randn(1,10), defense: randn(1,10)},
      { id: 13, name: 'Bombasto', attack: randn(1,10), defense: randn(1,10)},
      { id: 14, name: 'Celeritas', attack: randn(1,10), defense: randn(1,10)},
      { id: 15, name: 'Magneta', attack: randn(1,10), defense: randn(1,10)},
      { id: 16, name: 'RubberMan', attack: randn(1,10), defense: randn(1,10)},
      { id: 17, name: 'Dynama', attack: randn(1,10), defense: randn(1,10)},
      { id: 18, name: 'Dr IQ', attack: randn(1,10), defense: randn(1,10)},
      { id: 19, name: 'Magma', attack: randn(1,10), defense: randn(1,10)},
      { id: 20, name: 'Tornado', attack: randn(1,10), defense: randn(1,10)}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}