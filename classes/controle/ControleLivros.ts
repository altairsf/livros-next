import { Livro } from "../modelo/Livro";

const baseURL: string = "http://localhost:3030/livros";

//Interface LivroMongo
interface LivroMongo {
  _id : String | null;
  codEditora : number;
  titulo: string;
  resumo: string;
  autores: string [];
}

export class ControleLivros {
  async obterLivros(): Promise<Livro[]> {
    const resposta = await fetch (baseURL, {method: "GET" });
    const dados: LivroMongo[] = await resposta.json();
    return dados.map (
      (livro) => new Livro (String(livro._id), livro.codEditora, livro.titulo, livro.resumo, livro.autores)
      //fazer testes com String. Se não funcionar, converter para new Livro (parseInt(livro._Id || "0"))
    );
  }

  async incluir(livro: Livro): Promise<boolean> {
   const livroMongo : LivroMongo = {
    _id : null,
    codEditora : livro.codEditora,
    titulo : livro.titulo,
    resumo : livro.resumo,
    autores : livro.autores,
   };

    const resposta = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livroMongo),
    });

    return resposta.ok;
  }

  async excluir(codigo: string): Promise<boolean> {
    const resposta = await fetch(`${baseURL}/${codigo}`, { method : "DELETE" });
    return resposta.ok;
    }
  }