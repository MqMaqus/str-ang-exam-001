import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "heroes", component: HeroesComponent},
  {path: "navigation", component: NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, HeroesComponent, NavigationComponent ]