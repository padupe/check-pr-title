import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
    try {
        let titlePR = github.context.payload.pull_request.title;

        let PRDefault = /[a-z]+\([A-Z]+-\d+\):.*/
        
        let validateTitle = PRDefault.test(titlePR)

        if ( validateTitle === true ) {
            // core.setOutput("RESULT", 'Título de Pull Request no Padrão')

            let idJira = titlePR.split("(").pop().split(")")[0];

            core.setOutput("DATA", `${idJira}`)

        } else {
            core.setFailed('ERRO. Título da Pull Request não está no padrão.\ntipoPR(IDJIRA): Descrição.')
        }

    } catch (e) {
        core.setFailed(`Essa ação só será executada em uma Pull Request.\nERRO: ${e}.`)
    }
}

run()