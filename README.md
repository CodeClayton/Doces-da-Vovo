# Doces da Vovó

## Descrição:
    Projeto criado para uma doceria, foi utilizado as tecnologias:
     HTML,CSS,JS (Node), Bootstrap(framework), MySQL (Workbench).
## Requisitos:

    -MySQL
    -Xampp
    -Node (versão utilizada: v22.14)
    -Editor de codigo para rodar o nodeJs (Vs Code utilizado)

## Diretorios:

    -node_modules
    -public
        -imagens de apoio
        -css
            -contact.css
            -global.css (configurações padrao do header, main e footer)
            -index.css 
            -quemSomos.css
        -html
            -contact.html   
            -quemSomos.html
        -js
            -contact.js
            -global.js

        -index.html
    -app.js (servidor)
    README.md

## Como Usar:

    -Primeiro crie um banco de dados:
        CREATE DATABASE IF NOT EXISTS dbVovo;

    -Utilize o banco de dados criado:
        USE dbVovo;
    
    -Crie a seguinte tabela com os campos:

        CREATE TABLE IF NOT EXISTS contactForm(
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL,
            message VARCHAR(500) NOT NULL
        );

    -Após a criação do banco de dados, instale as dependencias:
        npm install

    -Rode o projeto:
        node app.js

### Observações:

    Caso a conexão com o SQL retorne erro tente:
    -Mudar a senha do usuario usado:
        ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';
    -Verifique se o Xampp esta funcionando corretamente (porta usada 3306)

## FIM 

