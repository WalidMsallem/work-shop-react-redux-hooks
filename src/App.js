import React, { Component } from 'react'  
import Lists from './components/lists'
import Form from  './components/Form'
import data from './services/data.json' 
import './App.css';


 class App extends Component {
   state ={
   }



  render() {
    console.log('state' , this.state)
    return (
      <div className="App">
           <Form  />
           <Lists />
      </div>
    )
  }
}

export default App;
