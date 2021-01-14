import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import BasicInfo from './BasicInfo/BasicInfo'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      people:[
        {
          name:'Nadia',
          phoneNumber:'123-456-7890',
          birthDate: '05/05/1996'
        },
        {
          name:'Lucille',
          phoneNumber:'123-456-7890',
          birthDate: '01/16/1997'
        },
        {
          name:'Lennox',
          phoneNumber:'123-456-7890',
          birthDate: '04/05/2020'
        },
        {
          name:'Ascot',
          phoneNumber:'123-456-7890',
          birthDate: '12/01/2020'
        },
      ]
    }
    }
  render() {
    const P = this.state.people.map((person, i) =>{
      return(
        <BasicInfo 
        key ={i}
      name={person.name}
      phoneNumber={person.phoneNumber}
      birthDate={person.birthDate} />
      )
    })
    return (
      <div className = "App">
      <h1>React Info Cards</h1>
      {P}
      </div>

    )
  }
}












export default App;
