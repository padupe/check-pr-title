import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
    try {
        let titlePR = github.context.payload.pull_request.title;

        let PRDefault = /[a-z]+\([A-Z]+-\d+\):.*/
        
        let validateTitle = PRDefault.test(titlePR)

        if ( validateTitle === true ) {
            // core.setOutput("RESULT", 'Título de Pull Request no Padrão')

            console.log('1', titlePR.split("("))
            console.log('2', titlePR.split("(").pop())
            console.log('3', titlePR.split("(").pop().split(")"))

            let idJira = titlePR.split("(").pop().split(")")[0];
            console.log('TEST', idJira)

            // core.setOutput("DATA", `${idJira}`)
            core.setOutput(`ID JIRA: ${idJira}`)

        } else {
            core.setFailed('ERRO. Título da Pull Request não está no padrão.\ntipoPR(IDJIRA): Descrição.')
        }

    } catch (e) {
        core.setFailed(`Essa ação só será executada em uma Pull Request.\nERRO: ${e}.`)
    }
}

run()