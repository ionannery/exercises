## Parte 4 - O seu repositório no GitHub
Pronto! Agora que você já é capaz de gerenciar localmente seus códigos e também enviá-los para o **GitHub** , é hora de colocar a casa em ordem!

Antes de começar, siga as instruções da página sobre Portfólio de Exercícios para criar a estrutura de diretórios que usará ao longo de todo o curso para guardar seus exercícios.

Durante seu curso na Trybe , seus projetos serão entregues através de pushes nos repositórios do **GitHub** . Para podermos simular um exercício feito, você criará um arquivo `.txt` com um nome de sua escolha (Exemplo: trybe-skills.txt ) e utilizará o conteúdo abaixo.
```
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
```
No final, ao executar o comando `ls -l` na pasta de arquivos deste dia, você deverá receber um retorno parecido com:
```
ls -l

total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt
```
Agora vamos transformar essa pasta em um repositório **Git**:

Retorne para a raiz da pasta de exercícios;

Inicialize o repositório com `git init`;

Crie um arquivo de `README` utilizando o comando `touch README.md`;

Crie um `commit` inicial utilizando:
```
git add .
git commit -m "Initial commit"
```
