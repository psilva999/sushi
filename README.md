# sushi
  Come and get your sushi

Site: https://psilva999.github.io/sushi/

## Technologies
___
* Figma
* React
* JavaScript

* HTML
* CSS
* SCSS

## What i applied in the project:
___
* Responsive Design
* Scroll Effect

* LocalStorage
* Darkmode

## Details

___
### `vite`:

`npm init vite`

`cd nome-app`

`npm install`

`npm run dev`
### ...
`npm i react-router-dom`

## Git-hub-page
___
--Crie um repositório remoto

0 - git remote remove origin

1 - git init

2 - git add .

3 - git commit -m 'config do github-pages'

4 - git branch -M main

<-- 5 - git remote add origin https://link-disponivel-quando-criar-repositorio-remoto -->

6 - git push -u origin main

--Mude o vite.config.js

1 - abra o arquivo vite.config.js
2 - deixe o export defaul defineConfig dessa forma:

export default defineConfig({
  base: '/nome-do-seu-repositorio-remoto/',
  plugins: [framework()]
})

------

0 - npm run build

1 - git add dist -f

2 - git commit -m 'github-page habilitado'

3 - git subtree push --prefix dist origin gh-pages
