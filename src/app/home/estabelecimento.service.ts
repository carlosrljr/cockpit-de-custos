import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estabelecimento, EstabelecimentoAPI } from './interfaces/estabelecimento';
import { pluck } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(private http:HttpClient) { }

  retornaEstabelecimentos():Observable<Array<Estabelecimento>>{
    return this.http.get<EstabelecimentoAPI>('../../assets/json/estabelecimentos.json').pipe(pluck('estabelecimentos'))
  };
}

