import React, { Component } from 'react';
import './App.css';
import Tabela from './dentista/TabelaDentista';
import axios from 'axios'

class App extends Component {

  state = {
    dentistas: []
  }

  componentDidMount(){

  axios.get(`http://localhost:8080/odonto/dentistas`)
    .then(res => {
      const dentistas = res.data;
      this.setState({dentistas});
    })

  }

  render(){
    return (
      <div>
        <Tabela dentistas = { this.state.dentistas} />
      </div>
    );
  };

  

  
}

export default App;
