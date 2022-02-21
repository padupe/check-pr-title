const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        let titlePR = github.context.payload.pull_request.title;

        let all = github
        let context = github.context
        let payload = github.context.payload
        let PR = github.context.payload.pull_request

        console.log("ALL", all)
        console.log("CONTEXT", context)
        console.log("PAYLOAD", payload)
        console.log("PULL REQUEST", context)

        let PRDefault = /[a-z]+\([A-Z]+-\d+\):.*/
        let PRHotFix = /(hotfix)+\:.*/

        let validateTitle = PRDefault.test(titlePR)
        let validateHotFix = PRHotFix.test(titlePR)

        if ( validateTitle == false && validateHotFix == false) {
            core.setFailed('ERRO. Título da Pull Request não está no padrão.\n"tipoPR(IDJIRA): Descrição." ou "hotfix: descrição."')
        } else if (validateTitle == true && validateHotFix == false) {
            console.log('Título permite que a GMUD seja criada.')
            return true
        } else if (validateTitle == false && validateHotFix == true) {
            console.log('Hotfix, não será criada a GMUD.')
            return true
        }

    } catch (e) {
        core.setFailed(`Essa ação só será executada em uma Pull Request.\nERRO: ${e}.`)
    }
}

run()