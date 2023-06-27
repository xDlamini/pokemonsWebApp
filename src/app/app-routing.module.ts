import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
   {path: '', component: LoginComponent},
   {path: 'pokemonlist', component: PokemonListComponent},
   {path: 'signup', component: SignupComponent},
   {path: 'home', component: HomeComponent},
   {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
