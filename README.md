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
   - Não haverá área de cadastro.
   - Apenas um login e senha.
   - O sistema deve ter um local para autentificação do administrador, não acessível a outros usuários.

2. *O sistema deverá mostrar os portfólios em grid ou lista:*
   - Na página inicial, os projetos aparecerão com foto, nome dos integrantes e descrição breve.
   - No celular, será exibido um projeto por linha.
   - Ter media query para diferentes tamanhos de telas

3. *O sistema deverá mostrar os Projetos de cada Aluno:*
   - Cada projeto exibido conterá:
     - Nome do projeto.
     - Nome dos alunos.
     - Descrição breve.
     - Pelo menos 1 imagem.
   - Na página de detalhes do projeto, será exibida uma descrição mais detalhada com:
     - Nome dos alunos e papéis.
     - Tecnologias usadas e como foram aplicadas.
     - Outros detalhes variados sobre o projeto.

4. *O sistema deverá conter um sistema de Busca e Filtro:*
   - Filtros disponíveis:
     - Tecnologias.
     - Ferramentas.
     - Cursos.
     - Períodos dos projetos.
     - Unidade do IBMEC.
   - O sistema deverá conter um campo de busca para palavras-chave.

5. *No sistema, o administrador deverá poder adicionar e disponibilizar os projetos no portfólio do Aluno:*
   - O administrador poderá inserir:
     - Nome do projeto.
     - Nome dos alunos.
     - Descrição.
     - Tecnologias e ferramentas usadas.
     - Data de início e fim do projeto.
     - Pelo menos 1 imagem (opção de adicionar mais imagens na página de detalhes).

6. *O sistema deverá informar a data de Início e Fim dos projetos:*
   - As datas de início e fim deverão estar visíveis na listagem e detalhamento dos projetos.

7. *O sistema deverá conter as tecnologias (Linguagens, Ferramentas...) usadas no projeto:*
   - As tecnologias e ferramentas deverão ser exibidas na descrição detalhada do projeto.

8. *O sistema deverá conter as descrições (estar na página de detalhes do projeto) do projeto:*
   - A página de detalhes conterá:
     - Nome dos autores.
     - Papéis desempenhados no projeto.
     - Tecnologias usadas.
     - Uma imagem do projeto.
     - Descrição mais aprofundada do projeto.
     - Documentos ou outros materiais relevantes.

9. *O sistema deverá conter pelo menos 1 imagem para cada projeto:*
   - Pelo menos 1 imagem obrigatória.
   - A forma de exibição da imagem é de liberdade do programador.
   - Mais imagens podem ser adicionadas na página de detalhes do projeto.

10. *O sistema deverá conter uma navegação de conteúdos por paginação:*
    - O sistema deverá ter paginação ao invés de scroll infinito.
    - A paginação ajuda na identificação e navegação dos projetos.

11. *O sistema deverá voltar para a página em que estava quando usarmos o "voltar" do browser:*
   - O sistema não deve voltar para a página um
   - Uso do botão do browser e não um botão na página


# Requisitos Não Funcionais:
1. *O sistema deverá ser em Inglês e Português:*
   - O sistema deverá suportar ambas as línguas, dando escolha ao usuário em qual utilizar

2. *O sistema deverá ser feito no React:*
   - O desenvolvimento utilizará React como framework.

3. *O sistema deverá ter a identidade visual do Ibmec:*
   - O site deverá seguir a identidade visual e padrões de design do IBMEC.

4. *O sistema deverá servir tanto para computador quanto para celular:*
   - O design deverá ser responsivo, garantindo uma boa usabilidade em dispositivos desktop e móveis.

