import React, {Component} from 'react'

class Keypad extends React.Component{
    
    eventHandler = (event) =>{
        console.log('Entering password...')
    }
    
    render(){
      return(
          <input onKeyUp={this.eventHandler} type='password'></input>
      )
    }
}

export default Keypad
