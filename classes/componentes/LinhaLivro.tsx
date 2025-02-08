import { ControleEditora } from "../controle/ControleEditora";
import { Livro } from "../modelo/Livro";
import React from "react";

// Instância exportável de ControleEditora
const controleEditora = new ControleEditora();

// Interface para as propriedades do componente
interface LinhaLivroProps {
    livro : Livro;
    excluir: () => void; // Método para exclusão do livro
}

// Componente exportável LinhaLivro
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) =>{
    const {livro, excluir} = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        {livro.autores.map((autor, index) => (
          <div key={index}>{autor}</div>
        ))}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => excluir}
        >
          Excluir
        </button>
      </td>
    </tr>
  );
};