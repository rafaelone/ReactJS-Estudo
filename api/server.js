let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
var app = express();

app.use(cors({credentials: true, origin: ['http://10.17.2.14:3000','http://10.17.2.15:3000']}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let port = 3003;

app.listen(port)
console.log('API rodando na porta ' +port);

let usuarios = [{"username":"rafael", "password" : "123@mudar"}];

app.post('/login', (req, res) => {

    let obj = {
        username: req.body.username,
        password: req.body.password
    }

    let verificacao = usuarios.map((x) => {
        if(x.username === obj.username && x.password === obj.password){
            res.status(200).send({msg: "Usuario encontrado... pode logar"});
        }else{
            if(x.username === obj.username && x.password != obj.password){
                res.status(400).send({msg: "Usuario ou senha errado"});
            }else{
                res.status(400).send({msg: "Usuario nāo existe. Se cadastre para ter acesso"})
            }
        }
    })

});

