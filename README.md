![img](https://github.com/padupe/check-pr-title/blob/master/img/Validate%20the%20Title%20Structure%20of%20a%20Pull%20Request.svg)

# Validação de estrutura do Título de uma PR
_Action que valida a estrutura do Título de uma Pull Request_


#

*PADRÃO:*
```bash
    tipo(PREFIX-00): Descrição.
```

#

_*Exemplo:*_
```bash
    feat(ISSUE-159): Implements Swagger.
```

#

## Comandos Úteis

### Script

Compilar a lógica:
```bash
    ncc build index.js --license licenses.txt
```

### Git

Adicionar Tag:
```bash
    git tag -a -m "Your Message" v{number}
```

Apagar todas as tag's no ambiente local:
```bash
    git tag -d $(git tag -l)
```

Apagar todas as tag's remotas:
```bash
    git push origin --delete $(git tag -l)
```

Realizar o push das Tag's:
```bash
    git push --follow-tags
```
