//libs node.js
const fs = require('fs')
const assert = require('assert')

//classes
const Aluno = require('./class/Aluno.js')
const Professor = require('./class/Professor.js')

//files
const pathAluno = './files/Dados_Aluno.txt'
const pathMatriz = './files/Matriz_Dissimilaridade.txt'
const pathAlunoTest = './files/Dados_Aluno_Test.txt'

//Tests
describe('Testes do TI de Grafos', async function () {

    it('Leitura do arquivo de Alunos', async () => {
        let condition = true
        let result = await fs.readFileSync(pathAluno).toString()
        await fs.appendFileSync(pathAlunoTest, result, (err) => { if (err) condition = false })
        let result2 = await fs.readFileSync(pathAlunoTest).toString()
        assert.deepEqual(result, result2) //-> verifica se o conteúdo do arquivo de teste é igual ao original
        assert.deepEqual(true, condition) //-> verifica se ocorreu algum erro durante a leitura do arquivo
    })
    it('Deleta arquivo de teste de Alunos', async () => {
        let condition = true
        await fs.unlinkSync(pathAlunoTest, (err) => { if (err) condition = false })
        assert.deepEqual(true, condition) //-> verifica se ocorreu algum erro ao deletar o arquivo
    })
    it('Leitura do arquivo de Matriz', async () => {
        assert.equal(true, true)
        //TODO
    })
    it('Inserção de informações dos alunos', async () => {
        assert.equal(true, true)
        //TODO
    })
})