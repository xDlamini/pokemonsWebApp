import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{
  pokemons: any[] = []; // Holds the retrieved Pokémon data
  page = 1;
  totalPokemons: number | undefined;
  filteredPokemons: any[] = [];
  searchTerm: string = ''; //holds the search term entered by the user

  constructor(private apiService: ApiServiceService) {this.searchTerm}
  //In the constructor we are calling our apiService so that we can use it in pokemonList component

  ngOnInit(): void {
    this.getPokemons();

    this.apiService.searchPokemon(this.searchTerm)
      .subscribe((response: any) => {
        this.searchPokemon()
        console.log(response);

        this.filteredPokemons = response;
      })  
  }

  getPokemons(){
    this.apiService.getPokemons(20, this.page + 0)//we are calling a getPokemons method from apiServiceService
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: { name: string; }) => {
          this.apiService.getPokemonData(result.name)
            .subscribe((response: any) => {
              this.pokemons.push(response);
              console.log(response)
            })
        })
      })
  }

  searchPokemon() {
    throw new Error('Method not implemented.');
  }
 
  
  
  
}

/*
    ngOnInit(): void {
    this.apiService.getPokemons()//we are calling a getPokemons method from apiServiceService
      .subscribe((response: any) => {
        response.results.forEach((result: { name: string; }) => {
          this.apiService.getPokemonData(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            console.log(this.pokemons)
          });
        })
      })
  }
  searchPokemon(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredPokemons = [...this.pokemons]; // Reset filter if search term is empty
    } else {
      this.filteredPokemons = this.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  searchPokemon() {
    const searchTerm = this.searchTerm;
    
    
  }
*/