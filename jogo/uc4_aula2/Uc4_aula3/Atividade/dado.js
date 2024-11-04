class Dado{

    #face;


    constructor(){
        this.#face;
    }
    getface(){
        return this.#face;
    }

    setFace(){
        this.#face;
    }

    exibirDados(){
        console.log(
            `
            Dados Jogo
            face: ${this.face}
            
         `
        )
    }
}

