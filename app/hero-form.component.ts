import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero(null, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;

    // afterAddingHeroRequest = new EventEmitter<Hero>();
    @Input()
    heroesList: Hero[];

    constructor(private heroService: HeroService) { }

    onSubmit() { this.submitted = true; console.log("test"); }

    addHero(): void {
        this.heroService.createHero(this.model)
            .then(hero => {
                this.model = hero;
                // this.afterAddingHeroRequest.emit(hero);
                this.heroesList.push(hero);
                console.log("addHero method");
            });
    }

    newHero() {
        this.model = new Hero(null, '', '');
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }


}