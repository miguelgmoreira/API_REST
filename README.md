# API, REST e RESTFUL

# API

Cliente (Client)
Garçon (pedidos, levar seus pedidos para a cozinha) (API)
Cozinha (Server)

Acronimo de Application Programming Interface (Interface de Programação de Aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Rsponsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações.

# REST

Acronimo de Representational State Transfer (Transferência de dados Representativo).

Será feita a transferência de dados de uma maneira diática, representativa.

A tranferência de dados é feita, geralmente, usando HTTP.

O Rest, delimita algumas obrigações nessas tranferências de dados.

Os dados no Rest são chamados de resources (recursos).

### 6 NECESSIDADES (constraints) para ser RESTFUL

- _Interface uniforme_: visa simplificar e padronizar a interação entre os componentes do sistema, promovendo uma arquitetura mais escalável e interoperável. Aqui estão os principais aspectos da Interface Uniforme:

- _Client-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, possibilitando a comunicação com diferentes clients.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. É comum usar tokens para as comunicações.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa a um endpoint, a API REST deve abstrair a complexidade do sistema e devolver de forma simples os resources para o cliente

- _Code on demand_ (opcional): Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.

# RESTFUL

RESTful, é a aplicação dos padrões REST.

## BOAS PRÁTICAS

- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação de endpoints? _NÂO IMPORTA!_ use um padrão!!
- Não deixar barra no final do endpoint.
- Nunca deixe o cliente sem resposta.

#### Verbos HTTP

- GET: Receber dados de um Resource.
- POST: Enviar dados ou informações para serem processados de um Resource.
- PUT: Atualizar dados de um Resource.
- DELETE: Deletar um Resource.

### STATUS DAS RESPOSTAS

- 1xx: Informação
- 2xx: Sucesso
    - 200: ok
    - 201: CREATED
    - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
    - 400: Bad Request
    - 404: Not Found
- 5xx: Server Error
    - 500: Internal Server Error

