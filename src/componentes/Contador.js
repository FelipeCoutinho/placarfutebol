import React from 'react'

class Contador extends React.Component{
    
    constructor(){
        super();
        this.state = {
            contador:1,
            nome:'Felipe',
            idade:26
        }
    }

    incrementar(){
        this.setState({
            contador:this.state.contador +1
        })
    }

    dec(){
        this.setState({
            contador:this.state.contador -1
        })
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h1>{this.state.contador}</h1>
                <button onClick={this.incrementar.bind(this)} >+</button>
                <button onClick = {this.dec.bind(this)}>-</button>
            </div>
        )
    }
}

export default Contador;