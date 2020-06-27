import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from '../components/home/home.component';
import {CharactersComponent} from '../components/characters/characters.component';
import {ComicsComponent} from '../components/comics/comics.component';
import {SeriesComponent} from '../components/series/series.component';
import {CreatorsComponent} from '../components/creators/creators.component';
import {EventsComponent} from '../components/events/events.component';
import {DetailsComponent} from '../components/details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'creators', component: CreatorsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'details/:type/:id', component: DetailsComponent, runGuardsAndResolvers: 'paramsChange' },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
