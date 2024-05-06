import dotenv from 'dotenv'
import axios from 'axios'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mysql from 'mysql'

const apiUrl = 'https://api.openai.com/v1/completions';

// const API_KEY = '';

dotenv.config()
  
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Api POST
app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
// Prompt de pergunta CHAT GPT
    const prompt = `Me informe em topicos detalhados sobre a revisão do meu carro com as seguintes especificações = ${req.body.marca} ${req.body.carroceria} ${req.body.categoria} ${req.body.Km} e ${req.body.blindado}`;

// Api POST para CHAT GPT
    axios.post(apiUrl, {
        model: 'davinci-002',
        prompt: prompt,
        max_tokens: 400
    }, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${process.env.API_KEY}`
        }
    })
    .then(response => {

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root"
          });
          
          con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(`INSERT INTO ze_solutions.perguntas_respostas (perguntas, respostas)  VALUES ("${prompt}", "${response.data.choices[0].text}");`, function (err, result) {
              if (err) throw err;
              console.log("Result: " + result);
            });
          });
//Envia a reposta para o front / modal
          res.status(200).send(response.data.choices[0].text);

    })
    .catch(error => {
        console.log(error);
        if (error.response) {
            // A resposta do servidor com detalhes do erro
            console.log(error.response.status);
            console.log(error.response.data);
        }
    });
});


app.listen(3000, () => console.log('Started server at http://localhost:3000!'));

