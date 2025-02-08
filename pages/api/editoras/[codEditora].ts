import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default (req:NextApiRequest, res:NextApiResponse) => {
    try{
        if (req.method === "GET") {
            // Obtém o parâmetro codEditora da URL e converte para number
            const codEditora = parseInt(req.query.codEditora as string, 10);
            // Obtém o nome da editora pelo código
            const nomeEditora = controleEditora.getNomeEditora(codEditora);
            console.log(codEditora);
            if (nomeEditora){
                // Responde com status 200 e o nome da editora no formato JSON
                res.status(200).json({ nome: nomeEditora });
            }
            else {
                 // Código de editora não encontrado
                 res.status(404).send("Editora não encontrada");
            }
        }
        else {
             // Método não permitido
            res.setHeader("Allow", ["GET"]);
            res.status(405).send("Método não permitido");
        }
    }
    catch (error) {
        // Erro interno no servidor
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).send("Erro no servidor");
    }
};