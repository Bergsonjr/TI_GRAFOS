//libs node.js
const fs = require('fs')

//class
const Aluno = require('./class/Aluno.js')
const Professor = require('./class/Professor.js')

const path = './file/Dados_Alunos_.txt'


function readFile(path) {
    let result = await fs.readFileSync(path)
    console.log(result)
}

async function main() {
    readFile(path)
}

main()