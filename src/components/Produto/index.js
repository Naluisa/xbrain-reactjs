import React, { Component, Fragment } from 'react';
import './Produto.css';
import { styled, createMuiTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { white } from 'material-ui/styles/colors';

const Produto = function (props) {
    return <Fragment>
        <div className="produto">
            <img src={"./images/" + props.image} />
            <div className="data-container">
                <div className="nome-produto">{props.nome}</div>
                <div className="valor-produto">R$ {props.valor}</div>
                <div className="parcelas-produto">Em até 12x de R$ {parcelas(props.valor)}</div>
                <div className="desconto-produto">R$ {desconto(props.valor)} à vista (10% de desconto)</div>
                <div className="produto-container">
                    <div className="quantidade-produto">
                        <QtdButton onClick={() => { alterProdQtd(-1, props.id, props.valor) }}>-</QtdButton>
                        <input id={props.id} className="input-qtd" type="number" value="0"></input>
                        <QtdButton onClick={() => { alterProdQtd(1, props.id, props.valor) }}>+</QtdButton>
                    </div>
                    <AddButton
                        onClick={() => { toAdd(props.valor, document.getElementById(props.id).value) }}
                        variant="contained">Adicionar</AddButton>
                </div>
            </div>
        </div>
    </Fragment>;
}

function parcelas(valor) {
    let valorParcelado = parseFloat(valor);
    valorParcelado = (valorParcelado / 12);
    valorParcelado = parseFloat(valorParcelado.toFixed(2));
    return String(valorParcelado);
}

function desconto(valor) {
    let valorComDesconto = parseFloat(valor);
    valorComDesconto = valorComDesconto * 0.9;
    valorComDesconto = parseFloat(valorComDesconto.toFixed(2));
    return String(valorComDesconto);
}

const QtdButton = styled(Button)({
    borderRadius: 50,
    maxWidth: '40px',
    maxHeight: '40px',
    minWidth: '40px',
    minHeight: '40px',
    backgroundColor: '#d9d9d9',
    margin: '5px',
    fontSize: 18,
    fontWeight: 900
});

const AddButton = styled(Button)({
    color: white,
    width: '100%',
    backgroundColor: '#3399ff',
    marginTop: 10,
    fontFamily: 'Roboto',
    fontWeight: '600'
});

let total = 0.00;

function alterProdQtd(value, id, itemValue) {
    let docValue = document.getElementById(id).value;
    if (value == -1) {
        if (docValue > 0) {
            docValue = parseInt(docValue) - 1;
            document.getElementById(id).value = docValue;
        }
    }
    if (value == 1) {
        if (docValue > -1) {
            docValue = parseInt(docValue) + 1;
            document.getElementById(id).value = docValue;
        }
    }
}

function toAdd(itemValue, qtd) {
    total = total + parseFloat(itemValue) * qtd;
    console.log(total.toFixed(2));
}

export default Produto;