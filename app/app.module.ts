import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import './rxjs-extensions';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';
import { HeroFormComponent } from './hero-form.component';
import { WikiComponent } from './wiki.component';
import { HeroBirthday2Component } from './hero-birthday2.component';
import { VersionParentComponent } from './version-parent.component';
import { VersionChildComponent } from './version-child.component';
import { MissionControlComponent } from './mission-control.component';
import { AstronautComponent } from './astronaut.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroFormComponent,
    WikiComponent,
    HeroBirthday2Component,
    VersionParentComponent,
    VersionChildComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }