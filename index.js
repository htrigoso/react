import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
 
  constructor() {
    super();
    this.state = {
      name: 'React',
      info: 'Saludos',
      list: [
          {
            name: 'Prueba 1',
            info: 'Saludos 1'
          },
          {
            name: 'Prueba 2',
            info: 'Saludos 2'
          }
        ]
    };
    
  }

  render() {
    return (
      <div>
        {
          this.state.list.map(res => 
            <Hello name={this.state.name} info= {this.state.info} />
          )
        }
        
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
