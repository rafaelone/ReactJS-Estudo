import React, { Component } from 'react'
import '../assets/css/animate.css';
import '../assets/css/style.css';
import '../assets/img/photo_bg.jpg';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import superagent from 'superagent';


let input = {
	marginBbottom: '20px',
	padding: '8px',
	border: '1px solid #ccc',
	borderRadius: '2px',
	fontSize: '9em',
	color: '#888'
}

let botaoLogin = {
	border: '1px solid black'
}

let msgError = {
	color: 'red'
}

export default class Login extends Component{

	constructor(){
        super()
        this.state = {
            msg: ""
        }
	}
	
	//Funcao de logar
	login(){

		//Pega os dados informados nos TextFields
		let username = document.getElementById("username").value.trim() || '';
		let password = document.getElementById("password").value.trim() || '';

		//Armazena no objeto para enviar para o back
		let obj = {
			username:username,
			password:password
		}
	
		superagent
		//requisicao para o back
		.post('http://localhost:3003/login')
		//mandando um obj
		.send(obj)
		.withCredentials()
		.end((err, res) => {
			//se erro
			if(err){
				// instancia o state para alterar somente um item do state
				let state = this.state
				//state.msg vai receber o resultado do back
				state.msg = res.body.msg;
				//altera somente o state.msg
				this.setState(state)
			}else{
				// instancia o state novamente para alterar somente um elemento
				let state = this.state;
				// state.msg vai receber o resultado do back
				state.msg = res.body.msg;
				//altera somenta o state.msg
				this.setState(state);
				//Proximo passo serar fazer o direcionamento ja com cookie para a home
			}
		});
	}


    render(){
        return(
        <div class="container">
		<div class="top">
			<h1 id="title" class="hidden"><span id="logo">Projeto</span></h1>
		</div>
		<div class="login-box animated fadeInUp">
			<div class="box-header">
				<h2>Log In</h2>
			</div>
					<TextField
						id="username"
						floatingLabelText="Login"
						floatingLabelFixed={true}
    				/>
					<TextField
						id="password"
						floatingLabelText="Password"
						floatingLabelFixed={true}
					/>
					<div>
				 	<span style={msgError}>{this.state.msg}</span>
					 </div>
				<FlatButton 
					label="Entrar"
					style={botaoLogin}
					onClick={() => {this.login();}}
				 />
			<a href="#"><p class="small">Forgot your password?</p></a>
			<a href="#"><p class="small">Cadastre-se</p></a>
		</div>
	</div>
        )
    }
}