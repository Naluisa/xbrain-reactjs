import React, { Fragment } from 'react';
import './Finaliza.css';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const Finaliza = function () {
    return (<Fragment>
        <section id="background">
            <div id="finaliza">
                <h2>John Doe,</h2>
                <h3>Sua compra no valor <span id="blue">R$ 129,00</span> foi finalizada com sucesso</h3>
                <div id="image">
                    <img src="./images/purchase.png" />
                </div>
                <Link to="/" style={{outline: 'none', textDecoration: 'none'}}><StyledButton color="default">Iniciar nova compra</StyledButton></Link>
            </div>
        </section>
    </Fragment>);
}

const StyledButton = styled(Button)({
    background: '#ff8c1a',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    border: 0,
    padding: '10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});

export default Finaliza;