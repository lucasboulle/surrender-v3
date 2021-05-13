# surrender-v2


url base da instância: SurrenderProduction-env.eba-6qrriuvf.sa-east-1.elasticbeanstalk.com


A estrutura do projeto consiste em um mono repo, dentro da pasta packages é possível visualizar todos os projetos separados por pastas.

    .
    ├── ...
    ├── packages                # pasta na raíz do projeto
    │   ├── web                 # front-end
    │   ├── server              # server (api do projeto)
    │   └── es-lint             # regras compartilhadas de linting
    └── ...

Dependencias compartilhadas são instaladas pelo `package.json` da raíz do projeto.

Coleção de endpoints na raiz do projeto.

