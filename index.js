const { select } = require('@inquirer/prompts')

const start = async () => {
    
    while(true){
        
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "Listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })


        switch(opcao) {
            case "Cadastrar":
             console.log("vamos cadastrar")
             break
             case "Listar": 
                console.log("vamos listar")
            break
            case "sair":
                console.log("Ate a proxima!")
                return

             
        }

    }
}

start()