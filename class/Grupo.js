class Grupo {
    constructor(Alunos) {
        this.grupoTcc.push(Alunos)
    }

    searchGroup(id) {
        for (let i = 0; i < this.grupoTcc.length; i++) {
            if (this.grupoTcc[i] === id) {
                return this.grupoTcc[i]
            }
        }
    }

    async printGroup(id) {
        let result = await searchGroup(id)
        console.log(result)
    }
}

module.exports = Grupo