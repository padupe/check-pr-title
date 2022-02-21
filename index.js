const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        let titlePR = github.context.payload.pull_request.title;

        let PRDefault = /[a-z]+\([A-Z]+-\d+\):.*/
        let PRHotFix = /(hotfix)+\:.*/
        
        console.log("Passo 2")

        let validateTitle = PRDefault.test(titlePR)
        let validateHotFix = PRHotFix.test(titlePR)

        console.log("Passo 3 - Validação via IF")

        if ( validateTitle == false && validateHotFix == false) {
            core.setFailed('ERRO. Título da Pull Request não está no padrão.\n"tipoPR(IDJIRA): Descrição." ou "hotfix: descrição."')
        } else if (validateTitle == true && validateHotFix == false) {
            core.setOutput('Título permite que a GMUD pode ser criada.')
            return true
        } else if (validateTitle == false && validateHotFix == true) {
            core.setOutput('Hotfix, não será criada a GMUD.')
            return true
        }

    } catch (e) {
        core.setFailed(`Essa ação só será executada em uma Pull Request.\nERRO: ${e}.`)
    }
}

run()