import con from "./connection.js";

export async function inserirChamado(chamado) {

    const comando = ` 
    
        insert into tb_chamado (titulo, informacoes, impacto, dt_ocorrencia, atribuir)
        values (?, ?, ?, ?, ?)

    `;

    let response = await con.query(comando, [chamado.titulo, chamado.informacoes,
    chamado.impacto, chamado.dataOcorrencia, chamado.atribuir]);

    let info = response[0];

    let id = info.insertId;

    return id;

}


export async function consultarChamado() {

    const comando = ` 
    
        select
        id_chamado,
        titulo,
        informacoes,
        impacto,
        dataOcorrencia,
        atribuir
        from tb_chamado

    `;

    let response = await con.query(comando);

    let registros = response[0];

    return registros;

}


export async function consultarChamadoPorId(id) {

    const comando = ` 
    
        select
        id_chamado,
        titulo,
        informacoes,
        impacto,
        dt_ocorrencia,
        atribuir
        from tb_chamado
        where id_chamado = ?;

    `;

    let response = await con.query(comando, [id]);

    let registros = response[0];

    return registros;

}


export async function alterarChamado(chamado, id){

    const comando = `  
    
        update tb_chamado
        set titulo = ?,
        informacoes = ?,
        impacto = ?,
        dt_ocorrencia = ?,
        atribuir = ?
        where id_chamado = ?
    
    `;

    let response = await con.query(comando, [chamado.titulo, chamado.informacoes,
    chamado.impacto, chamado.dataOcorrencia, chamado.atribuir, id]);

    let info = response[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


export async function deletarChamado(id){

    const comando = ` 
    
        delete from tb_chamado
        where id_chamado = ?
    
    `;

    let response = await con.query(comando, [id]);

    let info = response[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
    
}