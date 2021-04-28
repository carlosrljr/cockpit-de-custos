export interface Estabelecimento{
    sigla:string,
    nome:string
}

export interface EstabelecimentoAPI{
  estabelecimentos:Array<Estabelecimento>
}
