//libs node.js
const fs = require('fs')

//classes
const Aluno = require('./class/Aluno.js')
const Professor = require('./class/Professor.js')
const Grupo = require('./class/Grupo.js')

//files
const pathAluno = './files/Dados_Aluno.txt'
const pathMatriz = './files/Matriz_Dissimilaridade.txt'
const pathNames = './files/Nomes_Aluno.txt'

function readFile(path) {
    return fs.readFileSync(path).toString()
}

async function main() {
    let arrayAlunos = []
    let array = []
    let fileName = await readFile(pathNames).split('\n')
    let fileContent = await readFile(pathAluno).replace(/\n/g, ';').split(';')
    let matrizContent = await readFile(pathMatriz).split('\n').map((e) => { return e.split(' ') }) // -> converte conteúdo do arquivo para uma matriz
    //converte conteúdo do arquivo para um array de Alunos
    for (let i = 0; i < fileContent.length; i++) {
        arrayAlunos.push(new Aluno(parseInt(fileContent[i].substring(0, 2)), parseInt(fileContent[i].substring(3, 5)), fileName[i]))
    }
    // console.log(arrayAlunos)
    for (let i = 0; i < arrayAlunos.length; i++) {
        if (arrayAlunos[i].cod_pesq) {
            //TODO
        }
    }
    // let group = new Grupo(array)
    console.log(array)
    console.log(matrizContent[0, 0][2])
}

main()

//coluna -> cod_pesq