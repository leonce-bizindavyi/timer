//Importer les modules dont on a besoin
import React, { Component } from 'react'
import Box from './Components/Box'
import './App.css'
//Creer le composant 
class App extends Component{
  render(){
    return(
      <div className='App'>
        <Box />
      </div>
    )
  }
}

//exporter le composant pour le rendre disponible
export default App