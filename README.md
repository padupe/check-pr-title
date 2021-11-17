![img]()

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
    feat(ISSUE-159): Implements Swaager.
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

```bash
    git push --follow-tags
```