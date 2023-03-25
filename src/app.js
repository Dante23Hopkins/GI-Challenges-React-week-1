import './App.css'
import React from 'react';
import BasicInfo from './BasicInfo';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: [
        {
          name: 'Dante',
          number: 1,
          dob: 'Aug, 22 2002'
        },
        {
          name: 'Nadia',
          number: 2,
          dob: 'Dec, 24 2001'
        },
        {
          name: 'Amare',
          number: 3,
          dob: 'Jun, 9 2004'
        }
      ]
    }

  }
  render() {
    return (
      <div>
        <BasicInfo person={this.state.person} />
        <ul>
          {this.state.person.map(person => (
            <li key={person.name}>
              <BasicInfo person={person} />
            </li>
          ))}
        </ul>

      </div>
    )
  };
}

export default App;