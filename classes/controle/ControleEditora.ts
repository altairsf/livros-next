import { Editora } from "../modelo/Editora";

//Definindo variável editoreas
const editoras: Array<Editora> = [
    new Editora(1, "Altas Books"),
    new Editora(2, "Peason"),
    new Editora(3, "Addisson Wesley")
];

export class ControleEditora {
    getNomeEditora(codEditora: number): string | undefined {
        const editora = editoras.filter(e => e.codEditora === codEditora);
        return editora.length > 0 ? editora[0].nome : undefined;
    }

    getEditoras(): Array<Editora> {
        return editoras;
    }
}