# Doces da Vovó

## Descrição:
    Projeto criado para uma doceria, foi utilizado as tecnologias:
     HTML,CSS,JS (Node), Bootstrap(framework), MySQL (Workbench).
## Requisitos:
    -MySQL
    -Xampp
    -Node (versão utilizada: v22.14)
## Diretorios:
    -node_modules
    -public
        -imagens de apoio
        -css
        -html
        -js
        index.html
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
## FIM    

