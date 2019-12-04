import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import Cliente from './components/Cliente';

class App extends Component {
  render() {
    return <Fragment>
      <Header></Header>
      <Form></Form>
      <Cliente></Cliente>
    </Fragment>;
  }
}

export default App