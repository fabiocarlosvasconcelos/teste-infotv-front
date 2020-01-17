# teste-infotv-front

Para ingtegrar com a API, foi feita um aplicação simples client-site utilizando vue.js.

Foi implementado o login, cadastro de usuários e lista simples com os filmes. 
Cadastro de filmes e edição de filmes não implementado.

Fluxo básico:

1. Ao entrar será carregada a tela de login
2. Clique em registro e cadastre um usuário, se sucesso, será retornado ao login
3. Faça o login
4. Se sucesso, será redirecionado para lista de filmes.

Configuração:

No arquivo /js/config.js congure o endpoind base da api conforme o exemplo:

```
var config = {
    url: "http://172.24.91.85/"
};
```

Para executar:

1. Clone o projeto do githuh
2. Salve em uma pasta de seu computador
3. Abra o index.html com seu brower de preferência.

