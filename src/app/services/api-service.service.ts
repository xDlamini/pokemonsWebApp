import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon`);
  }
  //Above is a http request method to get the pokemons from the pokemon API 
  
  getPokemonData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  //making a get request to get the name of the pokemon which we will get dynamiclly from pokemonList component 

  searchPokemon(searchTerm: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);  
  }
}
