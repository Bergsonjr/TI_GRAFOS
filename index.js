//libs node.js
const fs = require('fs')

//classes
const Aluno = require('./class/Aluno.js')
const Professor = require('./class/Professor.js')

//files
const pathAluno = './files/Dados_Aluno.txt'
const pathMatriz = './files/Matriz_Dissimilaridade.txt'


function readFile(path) {
    return fs.readFileSync(path).toString()
}

async function main() {
    let arrayAlunos = []
    let fileContent = await readFile(pathAluno).replace(/\n/g, ';').split(';')

    for (let i = 0; i < fileContent.length; i++) {
        arrayAlunos.push(new Aluno(parseInt(fileContent[i].substring(0, 2)), parseInt(fileContent[i].substring(3, 5))))
    }
    console.log(arrayAlunos)
}

main()