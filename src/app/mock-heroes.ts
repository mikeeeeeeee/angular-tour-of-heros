import { Hero } from './hero';

function randn(min: number, max: number): number {
    let a = Math.floor( Math.random() * (max+1 - min) ) + min;
    return a;
}

export const HEROES: Hero[] = [
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