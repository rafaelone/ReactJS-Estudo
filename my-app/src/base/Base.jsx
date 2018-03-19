import React, { Component } from 'react';
import Home from '../routes/Home';
import Login from '../routes/Login';
import { Layout } from 'antd';

export default class Base extends Component{

    renderRouter(){
        switch(this.props.page){
            case "Home":
            return <Home />

            case "Login":
            return <Login />

            default:
            return(<h1>{"Pagina nao encontrada"}</h1>)
        }
    };

    render(){
        return(
            <Layout style={{height: '100vh'}}>
                <Layout>
                    {this.renderRouter()}
                </Layout>
            </Layout>
        )
    }

}