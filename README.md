# Exemplo de Back-end com Clean Architecture

## 📝 Descrição
Este é um projeto de exemplo que demonstra a implementação de um back-end utilizando TypeScript e Clean Architecture. O projeto é estruturado em três camadas principais, seguindo os princípios de separação de responsabilidades e boas práticas de desenvolvimento.

## 🏗️ Arquitetura
O projeto está estruturado em 3 camadas principais:

1. **Presentation Layer (Controllers)**
   - Responsável por receber as requisições HTTP
   - Validação de dados de entrada
   - Conversão de dados para o formato adequado

2. **Domain Layer (Use Cases)**
   - Contém a lógica de negócio
   - Define as regras e comportamentos da aplicação
   - Independente de frameworks externos

3. **Data Layer (Repositories)**
   - Responsável pela persistência dos dados
   - Implementação do acesso a dados
   - Conversão entre entidades do domínio e modelos de dados

## 🛠️ Tecnologias Utilizadas
- TypeScript
- Node.js
- Express
- TSX (para execução do TypeScript)

## ⚙️ Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório
# Exemplo de Back-end com Clean Architecture

## 📝 Descrição
Este é um projeto de exemplo que demonstra a implementação de um back-end utilizando TypeScript e Clean Architecture. O projeto é estruturado em três camadas principais, seguindo os princípios de separação de responsabilidades e boas práticas de desenvolvimento.

## 🏗️ Arquitetura
O projeto está estruturado em 3 camadas principais:

1. **Presentation Layer (Controllers)**
   - Responsável por receber as requisições HTTP
   - Validação de dados de entrada
   - Conversão de dados para o formato adequado

2. **Domain Layer (Use Cases)**
   - Contém a lógica de negócio
   - Define as regras e comportamentos da aplicação
   - Independente de frameworks externos

3. **Data Layer (Repositories)**
   - Responsável pela persistência dos dados
   - Implementação do acesso a dados
   - Conversão entre entidades do domínio e modelos de dados

## 🛠️ Tecnologias Utilizadas
- TypeScript
- Node.js
- Express
- TSX (para execução do TypeScript)

## ⚙️ Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório
bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

2. Instale as dependências


```
npm install
```
ou
```
yarn install
```

4. Inicie o servidor
```
npm run start
```
