import { MaterialLeitura } from "./MaterialLeitura";

class Livro implements MaterialLeitura{
    titulo: string;
    autor: string;
    numeropag: number;

constructor(titulo: string, autor:string, numeropag: number){
  this.titulo = titulo;
  this.autor = autor;
  this.numeropag = numeropag;
}


exibirdetalhe(): void {
    console.log(`Informaçoes livro titulo: ${this.titulo} autor: ${this.autor} numeropag: ${this.numeropag}`)
}


}