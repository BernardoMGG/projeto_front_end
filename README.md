# Projeto_front_end
Grupo 2BJGL

- Bryan Amorim: https://github.com/Bryanads/react-base-project.git
- Bernardo Gonçalves: https://github.com/BernardoMGG/react-base-project.git
- Gustavo Salvador: https://github.com/Gustavo6080/react-base-project
- Lucca Barcelos: https://github.com/CelosLucca/react-base-project.git
- João Pedro Abdu: https://github.com/jp-abdu/react-base-project.git

# Propósito do Sistema

O propósito do sistema é criar um meio de dar visibilidade aos projetos dos alunos do IBMEC.

## 5W2H

|Questão|Resposta|
|-------|--------|
|What?(O que é?)|Um site de que que exibe projetos IBMEC, em forma de portifolio para os alunos | 
|Why? (Por que isso será feito?)|Para valorizar os projetos dos alunos, com portifólios, e facilitar o acesso dos empregadores aos mesmos |
|Where? (Onde?)|Online, em um site do próprio IBMEC que tenha fácil acessibilidade para os empregadores |
|When? (Quando será utilizado?)|Quando alguém interessado quiser ver os projetos dos alunos IBMEC ou quando o ADM for inserir um novo projeto|
|Who? (Quem?)|Utilizado pelos usuários externos, alunos e professores|
|How? (Como?)|O Adm organiza os portfólios em uma plataforma digital, selecionando os melhores trabalhos, organizando-os de forma lógica e atrativa para facilitar a visibilidade.|
|How much? (Quanto custará?)|O custo do projeto será o tempo e esforço para o desenvolvimento da aplicação|



# Requisitos Funcionais:
1. *O sistema deverá conter um login para Administrador:*
   - O sistema não haverá área de cadastro.
   - O sistema terá apenas um login e senha.
   - O sistema deve ter um local para autentificação do administrador, não acessível a outros usuários.

2. *O sistema deverá mostrar os projetos em grid ou lista:*
   - Na página inicial,os sistema deverá mostar os projetos aparecerão com foto, nome dos integrantes e descrição breve.
   - No celular, o sistema exibirá um projeto por linha.
   -  O sistema deverá mostar diferentes quantidades de projetos por linha dependendo do tamanho da tela do dispositivo.

3. *O sistema deverá mostrar os projetos na página principal:*
   - O sistema deverá exibir, em cada projeto:
     - O sistema deverá mostar o nome do projeto.
     - O sistema deverá mostar os nomes dos alunos.
     - O sistema deverá mostar uma descrição breve.
     - O sistema deverá mostar o pelo menos 1 imagem.
   - Na página de detalhes do projeto, o sistema exibirá uma descrição mais detalhada com:
     - O sistema deverá mostar o nome dos alunos e papéis.
     - O sistema deverá mostar as tecnologias usadas e como foram aplicadas.
     - O sistema deverá mostar outros detalhes variados sobre o projeto.

4. *O sistema deverá conter um sistema de Busca e Filtro:*
   - O sistema deverá mostar o Filtros disponíveis:
     - O sistema deverá dar a opção de filtrar por : Tecnologias.
     - O sistema deverá dar a opção de filtrar por : Ferramentas.
     - O sistema deverá dar a opção de filtrar por : Cursos.
     - O sistema deverá dar a opção de filtrar por : Períodos dos projetos.
     - O sistema deverá dar a opção de filtrar por : Unidade do IBMEC.
   - O sistema deverá conter um campo de busca para palavras-chave.

5. *No sistema, o administrador deverá poder adicionar e disponibilizar os projetos no portfólio do Aluno:*
   - O sistema deverá ter um botão na página incial para possibilitar o administrador inserir:
     - O sistema deverá dar a opção de inserir : Nome do projeto.
     - O sistema deverá dar a opção de inserir : Nome dos alunos.
     - O sistema deverá dar a opção de inserir : Descrição.
     - O sistema deverá dar a opção de inserir : Tecnologias e ferramentas usadas.
     - O sistema deverá dar a opção de inserir : Data de início e fim do projeto.
     - O sistema deverá dar a opção de inserir : Pelo menos 1 imagem (opção de adicionar mais imagens na página de detalhes).

6. *O sistema deverá informar a data de Início e Fim dos projetos:*
   - O sistema deverá exibir as datas de início e fim na página de detalhamento dos projetos.

7. *O sistema deverá conter as tecnologias (Linguagens, Ferramentas...) usadas no projeto:*
   -  O sistema deverá exibir as tecnologias e ferramentas na descrição detalhada do projeto.

8. *O sistema deverá conter as descrições  do projeto:*
   - Na página de detalhes, o sistema conterá:
     - O sistema deverá exibir : Nome dos autores.
     - O sistema deverá exibir : Papéis desempenhados no projeto.
     - O sistema deverá exibir : Tecnologias usadas.
     - O sistema deverá exibir : Uma imagem do projeto.
     - O sistema deverá exibir : Descrição mais aprofundada do projeto.
     - O sistema deverá exibir : Documentos ou outros materiais relevantes.

9. *O sistema deverá conter pelo menos 1 imagem para cada projeto:*
   - O sistema deverá exibir : Pelo menos 1 imagem na página incial.
   - O sistema deverá permitir ver mais mais imagens (se disponível) na página de detalhes do projeto.

10. *O sistema deverá conter uma navegação de conteúdos por paginação:*
    - O sistema deverá ter paginação ao invés de scroll infinito.

11. *O sistema deverá voltar para a página em que estava quando usarmos o "voltar" do browser:*
    - O sistema não deve voltar para a página um.
    - O sistema deverá fazer uso do botão do browser e não um botão na página.

12. *O sistema deverá possibilitar o adminstrador se deslogar:"
    - O sistema deverá conter um botão de logout na página inicial quando o administrador estiver logado.


# Requisitos Não Funcionais:
1. *O sistema deverá ser em Inglês e Português:*
   - O sistema deverá suportar ambas as línguas, dando escolha ao usuário em qual utilizar

2. *O sistema deverá ser feito no React:*
   - O desenvolvimento utilizará React como framework.

3. *O sistema deverá ter a identidade visual do Ibmec:*
   - O site deverá seguir a identidade visual e padrões de design do IBMEC.

4. *O sistema deverá servir tanto para computador quanto para celular:*
   - O design deverá ser responsivo, garantindo uma boa usabilidade em dispositivos desktop e móveis.


# CASOS DE USO:

- [Fazer Login](Casos-de-uso/ADM-Fazer-Login.md)
- [Fazer Logout](Casos-de-uso/ADM-Fazer-logout.md)
- [Adicionar Projeto](Casos-de-uso/ADM-add_projeto.md)
- [Alterar Projeto](Casos-de-uso/ADM-alterar_proj.md)
- [Remover Projeto ](Casos-de-uso/ADM-remover_proj.md)
- [Exibir Detalhes](Casos-de-uso/Usuário-exibir_detalhes.md)
- [Exibir Sobre Nós](Casos-de-uso/Usuário-Exibir-Sessão_"sobre-nós".md)
- [Filtrar Busca](Casos-de-uso/Usuário-filtrar&buscar.md)

# PROTÓTIPO DO SITE:

Link para o Figma: https://www.figma.com/design/F65MDpCZktulsr9NlB0S7L/Portif%C3%B3lios-e-Projetos-ibmec?node-id=0-1&node-type=canvas&t=OKowjGWjUxjPtWqR-0

# CANVA DA APRESENTAÇÃO:

Link para o canva: https://www.canva.com/design/DAGRn4R6vFE/oyBG_y9jbTR9W0tt9X101w/edit?utm_content=DAGRn4R6vFE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

