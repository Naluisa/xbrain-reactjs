import React, { Fragment } from 'react';
import './Cliente.css';
import { TextField, Button, Link } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { styled } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';

const Cliente = function () {
    return <Fragment>
        <section id="cliente-container">
            <h2>Dados do Cliente</h2>
            <form id="client-form">
                <div id="client-input-container">
                    <TextField variant="outlined" label="Nome" style={{ margin: 10 }}
                        placeholder="Nome do cliente" color="secondary"
                        InputLabelProps={{ shrink: true }} fullWidth></TextField>
                    <TextField variant="outlined" label="Email" style={{ margin: 10 }}
                        placeholder="Email do cliente" color="secondary"
                        InputLabelProps={{ shrink: true }} fullWidth></TextField>
                    <TextField variant="outlined" label="Sexo" style={{ margin: 10 }}
                        value={sexo} color="secondary" fullWidth select
                        InputLabelProps={{ shrink: true }}>
                        {sexo.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div id="client-finalize">
                    <h2>Total: R$ 0,00</h2>
                    <Link to="/conclui" style={{ textDecoration: 'none' }}>
                        <StyledButton variant="contained" href="/conclui">FINALIZAR COMPRA</StyledButton>
                    </Link>
                </div>
            </form>
        </section>
    </Fragment >;
}

const sexo = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" }];


const StyledButton = styled(Button)({
    background: '#ff8c1a',
    width: 200,
    height: 40,
    display: flexbox,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});
export default Cliente;