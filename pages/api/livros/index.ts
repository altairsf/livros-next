import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivros } from "../../../classes/controle/ControleLivros";

export const controleLivro = new ControleLivros();

export default(req:NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === "GET") {
            // Responde com status 200 e o vetor editoras no formato JSON
            const livros = controleLivro.obterLivros();
            res.status(200).json(livros);
        }
        else if (req.method === "POST") {
            // Captura os dados do livro fornecido no corpo da requisição
            const livro = req.body;

            if (livro) {
                controleLivro.incluir(livro);
                // Responde com status 200 e mensagem de sucesso
                res.status(200).json({mensagem: "Livro incluído com sucesso!" });
            }
            else{
                res.status(400).send("Dados do livro não fornecidos.");
            }
        }
        else {
            // Método não permitido
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).send("Método não permitido");   
        }
    }
    catch (error) {
        // Erro interno no servidor
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).send("Erro no servidor");
    }
};