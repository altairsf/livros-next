import React from "react";
import Head from "next/head";
import { Menu } from "@/classes/componentes/Menu";
import styles from "./page.module.css";

export default function Home () {
  return (
    <div className = {styles.container}>
      {/* Definição do título da página */}
      <Head>
        <title>Loja Next</title>
      </Head>

      {/* Inclusão do menu */}
      <Menu />
        {/* Área principal da página */}
        <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
}
