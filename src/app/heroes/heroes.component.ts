import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

function randn(min: number, max: number): number {
  let a = Math.floor( Math.random() * (max+1 - min) ) + min;
  return a;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(input_name: string, input_attack?: string, input_defense?: string): void {
    var name: string = input_name.trim();
    if (!name) { return; }
    if (!input_attack) { var attack=randn(1,10); }
    else { var attack: number=Number(input_attack); }
    if (!input_defense) { var defense=randn(1,10); }
    else { var defense: number=Number(input_defense); }
    this.heroService.addHero({ name, attack, defense } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
