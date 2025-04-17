// importar a biblioteca do row(linha) data (dados) packet (pacote)
//guarda todos os dados q retorna da consulta select
// o comando ResultSetHeader é ultilizado para executar
// as consulatas de modificação das tabelas
// Insert,Update,Delete
import { RowDataPacket , ResultSetHeader } from "mysql2";

// importando a conexãopool com o banco de dados
// importando a conexão c a database p fazer uma consulta nas tabelas do banco.
import pool from "../database";

// interface user faz uma descrição da estrutura de dados da tabela usuario
export interface Produto extends RowDataPacket{
    id: number;
    nomeProduto: string;
    fabricante:string;
    descricao: string;
    preco: string;
}

/* Exporta a função getAllUsers (pegar todos os usuarios d banco de dados)
essa função é do tipo ascíncrona e, portanto, aguarda 1 processamento interno p realizar a exportação.
o exportação será feito pela linha do await(aguardar)
*/
export async function getAllProduto():Promise<Produto[]>{
    const [rows] = await pool.query<Produto[]>("select * from Produto", []);
        return rows;
}

// Função para criar um novo usuário
// Aguarda o usuário ser cadastrado. Portanto,estamos
//usando a função como async...await
/*
Para cadastrar um usuário será necessário passar o usuário por parâmetro e , ele
será gerenciado pelo seu id
*/
export async function createProduto(produto: Omit<Produto, 'id'>): Promise<ResultSetHeader> {
     try {
        /*
        Vamos usar o comando insert para cadastrar o usuário
        no banco de dados. Estamos usando também o comando
        await que irá esperar pelo cadastro completo do usuário.
        Na consulta do insert está sendo passada 2 parametros
        com o simbolo de ?. Consultas parametrizadas evitam
        a injeção de sql 
        */
    const [result] = await pool.execute<ResultSetHeader>(
    'INSERT INTO Produto (nomeProduto, fabricante, descricao, preco) VALUES (?, ?, ?, ?)',
     [produto.nomeProduto, produto.fabricante, produto.descricao, produto.preco]
    );
     return result;
     } catch (error) {
     console.error('Erro ao cadastrar o Produto:', error);
     throw error;
     }
     }

     // Função para atualizar um usuário existente
export async function updateProduto(id: number, produto: Omit<Produto, 'id'>): Promise<ResultSetHeader> {
    try {
     const [result] = await pool.execute<ResultSetHeader>(
     'UPDATE Produto SET nomeProduto = ?, fabricante = ?, descricao =?,preco =?,  WHERE id = ?',
     [produto.nomeProduto, produto.fabricante, produto.descricao, produto.preco, id]

     );
     return result;
     } catch (error) {
     console.error('Erro ao atualizar Produto:', error);
     throw error;
     }
     }
    


     // Função para deletar um usuário
export async function deleteProduto(id: number): Promise<ResultSetHeader> {
try {
 const [result] = await pool.execute<ResultSetHeader>('DELETE FROM Produto WHERE id = ?', [id]);
 return result;
 } catch (error) {
 console.error('Erro ao deletar Produto:', error);
 throw error;
 }}


 

    