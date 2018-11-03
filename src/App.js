import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import PokeView from './components/PokeVIew';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      poke: [
        {
          name: '',
          img: '',
          habilidades: [],
          status: []
        }
      ],
      num: 1,

    }

    this.ChangePoke = this.ChangePoke.bind(this)

  }

  ChangePoke() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.num}/`)
      .then((resp) => resp.json())
      .then(data => {
        const { sprites, name, abilities, stats } = data
        console.log(data)

        this.setState({
          poke: [
            {
              name: name,
              img: sprites,
              habilidades: abilities,
              status: stats
            }
          ]
        })
      }
      )
  }

  handleClick() {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    this.setState({ num: this.state.num + parseInt(rand) });
  }


  render() {
    console.log(this)
    return (
      <div className="App">
        <Header />
        <PokeView poke={this.state.poke} />
        <div className="changePok">
          <button className="chang" onClick={this.handleClick.bind(this)}>
            Change
          </button>
        </div>
      </div>
    );
  }
}

export default App;
