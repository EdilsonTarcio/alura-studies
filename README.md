# Getting Started with Create React App

Instalar dependencias

## `npm install`

Iniciar o projeto

### `npm start`

importações durante o desenvolvimento apenas para informação:

Instalando Sass

## `$ npm install --save-dev sass`

Instalando o typescript-plugin-css-modules para evitar problema de sobreposição de css nos componentes,  ele ira renderizar a classe css em algo como objeto_classe_rashAleatória dessa forma: class="App_AppStyle__gjeH7" 

## `npm install -D typescript-plugin-css-modules`

configurando o plugin no arquivo tsconfig.json:

{
  "compilerOptions": {
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}