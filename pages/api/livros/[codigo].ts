import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

export default( req:NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === "DELETE") {
            // Captura o código do livro fornecido na URL
            const codigo = parseInt(req.query.codigo as string, 10);

            if (!isNaN(codigo)) {
                controleLivro.excluir(codigo);
                // Responde com status 200 e mensagem de sucesso
                res.status(200).json({ mensagem: "Livro excluído com sucesso!" });
            }
            else {
                res.status(400).send("Código do livro inválido.");
                }
            }
        else {
            // Método não permitido
            res.setHeader("Allow", ["DELETE"]);
            res.status(405).send("Método não permitido");
            }   
        } 
    catch (error) {
        // Erro interno no servidor
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).send("Erro no servidor");
    }   
};