# Exercícios
#### Agora faremos nossa primeira requisição para um site.
```
curl testdomain.com
```
Note que a resposta que você receberá no terminal será um código `HTML` que como vimos anteriormente, permite configurar a estrutura física da página web.

Além disto, observe também que as tags `<html>` , `<head>` , `<title>`, `<body>` e `<h1>` estão presentes na resposta. A tag `<h1>` foi vista anteriormente no conteúdo e representa o título principal. As demais tags nós veremos com mais detalhes no próximo bloco de conteúdo. 🚀

Nesta próxima etapa, utilizaremos uma option do comando `curl` , conhecida como `--head` . Ela nos permitirá ter acesso a todo cabeçalho da página. Não se preocupe em entender todos os detalhes, vários pontos que estão presentes nesta resposta serão vistos por você com profundidade ao longo do curso!
```
curl --head https://www.betrybe.com/
```
Nesta requisição ao site da trybe, recebemos algumas informações como por exemplo:
- **Status da requisição** : está representado pelo número 200, e nos informa que nossa requisição foi feita com sucesso.
- **Server** : Servidor Web para onde as requisições estão sendo feitas.
- **Content-type** : Especifica como os dados são representados. Neste caso, `text/html`.
Por fim, veremos como podemos fazer uma requisição de download para uma URL específica, utilizando a option `-O`. A partir desta requisição você terá acesso ao arquivo localmente, no diretório em que o terminal está rodando.
```
curl -O https://uploads-ssl.webflow.com/5dbd9ce75ad64f24b67f0932/5dbdd9165ad64f5e29811c52_BRAND3.png
```
Note que o arquivo em sua máquina terá o mesmo nome do arquivo remoto. É comum que as nomenclaturas de arquivos remotos não sejam descritivas. Para resolver este problema, podemos utilizar uma segunda option do comando `curl` que nos permitirá nomear o arquivo da forma que desejarmos.
```
curl -o trybe_logo.png https://uploads-ssl.webflow.com/5dbd9ce75ad64f24b67f0932/5dbdd9165ad64f5e29811c52_BRAND3.png
```
Observe que agora o download foi feito com o nome `trybe_logo.png`.
