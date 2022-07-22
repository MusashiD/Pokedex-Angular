import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = []
  requisicao = <any>[];
  constructor(private httpClient:HttpClient){
    this.carregarPokemons()
  }
  async carregarPokemons() {
    const requisicao$ = this.httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      this.requisicao =  await lastValueFrom(requisicao$);
     this.pokemons = this.requisicao.results
     console.log(this.pokemons) 
  }
  
}
