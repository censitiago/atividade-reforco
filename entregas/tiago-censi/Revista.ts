import { MaterialLeitura } from "./MaterialLeitura";

class Revista implements MaterialLeitura {
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string, edicao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }

    exibirdetalhe(): void {
        console.log(`Informaçoes Revista: titulo ${this.titulo} autor: ${this.autor} edicao: ${this.edicao}`);
    }
}
const revista = new Revista("RollingStones", "Eu", 2025);
revista.exibirdetalhe;

