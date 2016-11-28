import { Component } from '@angular/core';
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

    constructor(private heroService: HeroService) { }

    model = new Hero(21, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;

    onSubmit() { this.submitted = true; console.log("test"); }

    newHero() {
        this.model = new Hero(42, '', '');
    }




    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }


}