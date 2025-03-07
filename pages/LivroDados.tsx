import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { ControleEditora } from "@/classes/controle/ControleEditora";
//import { Livro } from "@/classes/modelo/Livro";
import { Menu } from "@/classes/componentes/Menu";
import { useRouter } from "next/router";
import Head from "next/head";
import RootLayout from "@/app/layout";
import { ControleLivros } from "@/classes/controle/ControleLivros";

const controleEditora = new ControleEditora();
const controleLivros = new ControleLivros;

const LivroDados: React.FC = () => {
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);

    const router = useRouter();
    
    const tratarCombo = (evento :  React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(evento.target.value));
    };

    const incluir = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        if (codEditora === null) {
            alert("Selecione uma editora antes de salvar.");
            return;
        }
        const livro = {
            codigo: "", //alteração com String vazia
            titulo,
            resumo,
            autores: autores.split("\n"),
            codEditora,
        };

        controleLivros.incluir(livro).then (() => {
            router.push("/LivroLista"); //redireciona após a inclusão
        });
    };

    return (
        <RootLayout>
        <div className = {styles.container}>
            <Head>
                <title>Loja Next</title>
            </Head>

            {/* Inclusão do menu */}
            <Menu />
            
            {/* Área principal da página */}
            <main className = {styles.main}>
                <h1 className = {styles.title}>Cadastro de Livro</h1>
                <form onSubmit = {incluir}>
                    <div className = "mb-3">
                        <label className = "form-label">Título</label>
                        <input
                        type="text"
                        className="form-control"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                    </div>

                    <div className= "mb-3">
                        <label>Resumo</label>
                        <textarea
                            value={resumo}
                            className="form-control"
                            onChange={(e) => setResumo(e.target.value)}
                            required
                        />
                    </div>

                    <div className= "mb-3">
                        <label>Editora</label>
                        <select value = {codEditora} onChange={tratarCombo} className="form-select">
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                        </select>
                    </div>

                    <div className= "mb-3">
                        <label>Autores (1 por linha)</label>
                        <textarea
                        value={autores}
                        className="form-control"
                        onChange={(e) => setAutores(e.target.value)}
                        required
                    />
                    </div>

                    <div className= "mb-3">
                        <button type="submit" className="btn btn-primary">Salvar Dados</button>
                    </div>
                </form>
            </main>
        </div>
        </RootLayout>
    );
};

export default LivroDados;