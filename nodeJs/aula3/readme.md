Nesta aula vamos aprender algumas funções e usos do NPM

Primeiro de tudo para acessar a pasta que estams no terminal: cd aula3

Depois devemos iniciar o npm: npm init -y

E agora vamos instalar alguma coisa de terceiros, vamos usar o express neste caso

Para instalar o express: npm install express

Para mover o express para 'devDependencies': npm install express --save-dev

O WEBPACK é uma devDependencies, pois quando a gente for fazer um Deploy dentro do nosso servidor, nós vamos usar o BUNDLE, que é o código formatado
e não o Código fonte

A diferença do devDependencies para dependencies, é que o devDependencies nós usamos quando está em 'DESENVOLVIMENTO' e o outro para 'PRODUÇÃO'

Para instalar uma versão especifica de um pacote fazemos por exemplo: npm intall express@2.1.0

As versões de um pacote funciona assim:

  2  .  1  .  0
MAJOR MINOR PATCH

Major: Para quando fazemos uma grande mudança, que pode fazer com que mude a maneira que usamos nossos recursos, minors ou patch, ficaria: 3.0.0 (MUDANÇAS GERAIS)

Minor: Para quando adicionarmos um recurso novo dentro do nosso pacote, mudariamos para: 2.2.0 (ADIÇÃO DE RECURSOS)

Patch: Quando por exemplo encontrar um bug e resolver, nesse caso mudariamos para: 2.1.1 (CORREÇÃO DE BUGS)

E quando temos no começo um "^" significa que podemos mudar tanto a 'minor' quanto a 'patch' = ^2.1.0 (Possiveis modificações)

E para atualizar nossos pacotes para a última versão disponivel: npm update

Para desinstalar um pacote: npm uninstall express

Para listar os pacotes que temos instalados: npm ls

Para listar uma pasta para dentro: npm ls --depth=1

Para ver os pacotes que estão desatualizados: npm outdated