import { Livro } from "@/classes/modelo/Livro";
import { Menu } from "@/classes/componentes/Menu";
import styles from "../styles/Home.module.css";
import { LinhaLivro } from "@/classes/componentes/LinhaLivro";
import { useEffect, useState } from "react";
import Head from "next/head";
import RootLayout from "../app/layout";
import { ControleLivros } from "@/classes/controle/ControleLivros";

const controleLivros = new ControleLivros();

const LivroLista : React.FC = () => {
    const [livros, setLivros] = useState<Array<Livro>> ([]);
    const [carregado, setCarregado] = useState<boolean>(false);

    useEffect(() => {
        controleLivros.obterLivros().then((dados) => {
            setLivros(dados);
            setCarregado(true);
            });
    }, [carregado]);

    const excluir = (codigo : string) => {
        controleLivros.excluir(codigo).then((sucesso) => {
            if (sucesso) {
                setCarregado(false);
            }
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
                <h1 className = {styles.title}>Catálogo de Livros</h1>
                <table className="table table-striped table-bordered">
                    <thead className ="table-dark">
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro, index) => (
                        <LinhaLivro key={index} livro={livro} excluir={() => excluir(livro.codigo)} />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
        </RootLayout>
    );
};

export default LivroLista;

