import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent  {
  pokemons = ['bulbasaur','Ivysaur','Venosaur','Charmander'];
  contador = (pokemonIndex:number) => { 
    if (pokemonIndex < 10)
    return '00' + pokemonIndex
    if (pokemonIndex >= 10 && pokemonIndex<100)
      return '0' + pokemonIndex
      else return pokemonIndex.toString()
    //pokemonService.pokemons.indexOf(pokemon) + 1).toString()
  }
  constructor(public pokemonService:PokemonService){}

}
