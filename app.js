const express = require('express');
const app = express();
const port = 3001;

const mysql = require('mysql2');
const bodyParser = require('body-parser');

//configurando pasta publica
app.use(express.static('public'));

//Usando Body Parser para receber os dados do formulario
app.use(bodyParser.urlencoded({extended:false}));


//Configurando Banco de Dados
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dbVovo'
})

db.connect((err) => {
  if(err){
    console.log('Erro ao conectar no Banco de Dados');
    return err;
  }
  console.log('Sucesso ao conectar no Banco de Dados')
})


//Iniciando Servidor
app.listen(port,() => {
  console.log(`Servidor iniciado na porta ${port}`)
})


//Enviando Home
app.get('/',(req,res) => {
  res.sendFile(__dirname+'index.html')
})

//Enviando Formulario
app.get('/contact',(req,res) => {
    res.sendFile(__dirname+'/public/html/contact.html')
})

app.post('/submit',(req,res) => {
    const {name, email, message } = req.body;

    //Utilizando queryes personalizadas 
    const query = `INSERT INTO contactForm (name, email, message) VALUES(?, ?, ?)`;

    //Inserindo dados do formulario no Banco de Dados
    db.query(query, [name, email, message], (err,result) => {
      if(err){
        console.log('Erro ao inserir dados');
        return err;
      }
        console.log('Dados Inseridos com sucesso');
    });

    res.redirect('/relatorio')
    //console.log(name,email,message);
})

app.get('/relatorio',(req,res) => {
    db.query('SELECT * FROM contactForm',(err,result) => {
        if(err){
            console.log('Erro ao inserir dados');
            return err;
        }

        //console.log(result);

        const formatedData = result.map((e) => {
          return(
            `
            <section class="result">
                <h2>Nome:</h2> <p>${e.name}</p>
                <h2>Email:</h2> <p>${e.email}</p>
                <h2>Mensagem:</h2> <p>${e.message}</p>
            </result>
            `
          )
        }).join('');
        //Junto todo resultado em uma string;

        const html = `
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contato</title>

                <!--Links Globais-->
                <link rel="stylesheet" href="../css/global.css">
                <script src="../js/global.js" defer></script>
            
                <link rel="stylesheet" href="../css/contact.css">
            
                <!--FrameWork para icones-->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
            </head>
            <body>
                <header>
                    <a href="/">
                        <img src="../Imagens de apoio/Doces_da_vovó_sem_marca-removebg-preview.png" alt="Logo Doces da Vovo" class="logoHeader">
                    </a>

                    <i class="bi bi-list" id="showHideMenu"></i>

                    <nav class="navHeader">
                        <a href="#catalogo" class="navItem">Catalógo</a>
                        <a href="#" class="navItem">Contato</a>
                        <a href="html/quemSomos.html" class="navItem">Quem Somos</a>
                        <i class="bi bi-moon-fill" id="toggleTheme"></i>
                    </nav>
                </header>
                <main>
                    <section class="containerResult">${formatedData}</section>
                </main>
                <footer>
                    <i class="bi bi-arrow-up-circle-fill" id="backToTop"></i>

                    <nav class="navFooter">
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-whatsapp"></i>
                        <i class="bi bi-envelope"></i>
                        <i class="bi bi-facebook"></i>
                    </nav>
                </footer>
            </body>
            </html>
        `;

        res.send(html);
    });
})