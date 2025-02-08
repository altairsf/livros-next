import { ControleEditora } from "../../../classes/controle/ControleEditora";
import { NextApiRequest, NextApiResponse } from "next";

// Instância exportável de ControleEditora
export const controleEditora = new ControleEditora();

export default(req:NextApiRequest,res:NextApiResponse) => {
    try{
        if (req.method === "GET") {
            // Responde com status 200 e o vetor editoras no formato JSON
            const editoras = controleEditora.getEditoras();
            res.status(200).json(editoras);
        }
        else{
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