import React, { Component, Fragment } from 'react';
import './Form.css';
import Produto from '../Produto';
import dados from './dados.json';

const Form = function () {
    return (<Fragment>
        <section id="Form">
            {produto(0)}
            {produto(1)}
            {produto(2)}
            {produto(3)}
            {produto(4)}
            {produto(5)}
            {produto(6)}
            {produto(7)}
        </section>
    </Fragment>);
}

function produto(i) {
    return <Produto id={i} nome={dados.produtos[i].nome} valor={dados.produtos[i].valor} image={dados.produtos[i].image}></Produto>;
}

export default Form;