export interface FakeData {
    inst_nome: string;
    inst_cnpj: string;
    inst_obs: string;
    // curso_nome: string;
    // curso_nivel: string;
    // curso_obs: string;
    // disciplina_nome: string;
    // disciplina_obs: string;
    // turma_nome: string;
    // turma_obs: string
    // equipe_nome: string;
    // equipe_obs: string;
    // estudante_nome: string;
    // estudante_cpf: string;
    // professor_nome: string;
    // professor_obs: string;
    // adm_nome: string;
    // adm_obs: string;
}

export const INST_DATA: FakeData[] = [
    { inst_nome: 'CESAR Schoooooool', inst_cnpj: "01.203.327/0001-23", inst_obs: 'Nenhuma' }
];