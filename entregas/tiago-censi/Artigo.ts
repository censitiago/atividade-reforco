import { MaterialLeitura } from "./MaterialLeitura";

class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    datapublic: Date;

    constructor(titulo: string, autor: string, datapublic: Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.datapublic = datapublic;
    }

    exibirdetalhe(): void {
        console.log(`informaçoes artigo: titulo: ${this.titulo}, autor: ${this.autor}, data de publicação: ${this.datapublic}`);
    }
}

const art = new Artigo("Matemática Polinomiana", "Eu", new Date());
art.exibirdetalhe;