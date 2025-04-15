/* O controlador de dados lida c as requisiçoes do usuario e, também faz as respostas ao usuario.
portanto, iremos importar as bibliotecas: request e response do framework express */

import { Request, Response } from "express";
/** importar a função q traz todos os usuarios */
// Modificando a importação das bibliotecas:
 import { getAllProduto, createProduto, updateProduto, deleteProduto, Produto } from "../models/userModel";

export async function getProduto(req:Request, res:Response):Promise<void> {
    try{
        const Produto = await getAllProduto();
        res.status(200).json(Produto);
    } catch(error){
        res.status(500).json(`Erro ao listas os Produtos -> ${error}`)
    }
}

/*
 A função create cadastra novos usuários a partir dos dados enviados pelo frontend. 
 Estes dados serão passados via requeset
*/
export async function create(req:Request, res:Response):Promise<void>{
   try{
    // a constante user, guarda o usuário enviado pelo
    // frontend e passa para o método createUser
    const Produto: Omit<Produto,"id">=req.body
    const rs = await createProduto(Produto);
     res.status(201).json(`Cadastro realizado -> ${rs}`);
     }
     catch(err){
     res.status(500).json(`Erro ao tentar cadastrar ${err}`);
     }
    }
    


        export async function deleta(req:Request, res:Response):Promise<void>{
             try{
             const rs = await deleteProduto(parseInt(req.params.id))
            res.status(201).json(`Atualizado -> ${rs}`);
             }
             catch(err){
         res.status(500).json(`Erro ao tentar cadastrar ${err}`);
            }
            }
            
        
        export async function update(req:Request, res:Response):Promise<void>{
         try{
         const Produto: Omit<Produto,"id">=req.body
         const rs = await updateProduto(parseInt(req.params.id),Produto)
         res.status(201).json(`Atualizado -> ${rs}`);
         }
         catch(err){
             res.status(500).json(`Erro ao tentar cadastrar ${err}`);
         }
         }






            