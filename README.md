# AdequaPD

Sistema WEB para avaliar o grau de conformidade de uma organização à LGPD, por meio de um questionário simples que gera relatórios claros e práticos.

## Iniciando o projeto

* Saiba abrir issues, se atribuir, criar merge requests e seguir boas práticas de commit.

## Estrutura do projeto

* **AdequaPD-core**: Lógica do micro-SaaS.
* **AdequaPD-web**: Front-end, Inertia.js, Blade, Docker com Laravel Sail.

## Modelagem de interfaces

Interfaces criadas no **Figma**: [Acesse aqui](https://www.figma.com/proto/k9bozTQCvcgIjq5EddW0Iy/AdequaPD).

## Setup inicial

### ✅ Geração de chave de acesso

* Para **HTTPS**, use **Personal Access Token** (*Preferences > Access Tokens* no GitLab). Gere com escopo `read_repository` e `write_repository` para usar no clone, pull e push. **Salve o token**, ele é a "senha" quando for solicitado no terminal.
* Para **SSH**, gere e adicione sua chave:

  ```bash
  ssh-keygen -t rsa
  cat ~/.ssh/id_rsa.pub
  ```

  Adicione no GitLab em *Preferences > SSH Keys*.

### ✅ Configurar Git

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### ✅ Clonar repositório

```bash
git clone https://gitlab.com/silvakaio/kubernerds.git # HTTPS (use o token como senha)
# ou SSH
git clone git@gitlab.com:silvakaio/kubernerds.git
```

## Alias do Sail

Verifique com:

```bash
sail
```

Se não existir:

* **Linux/WSL**:

  ```bash
  echo "alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'" >> ~/.bashrc && source ~/.bashrc
  ```
* **MacOS**:

  ```bash
  echo "alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'" >> ~/.zshrc && source ~/.zshrc
  ```

## Instalar dependências

```bash
cd kubernerds
cp .env.example .env
sail composer install
sail yarn install
sail yarn upgrade
```

## Docker e ambiente

O projeto usa **Laravel Sail**, que roda com Docker. Para subir o ambiente:

```bash
sail up -d
```

## Chave da aplicação e banco

```bash
sail artisan key:generate
sail artisan migrate --seed
```

## Rodar modo dev

```bash
sail yarn run dev
```

## Build para produção

Para atualizar o Front-End quando for deploy:

```bash
sail yarn run build
```

## Dica Personal Access Token

Tokens são a única forma de autenticar via HTTPS se tiver 2FA no GitLab. Nunca compartilhe seu token.


