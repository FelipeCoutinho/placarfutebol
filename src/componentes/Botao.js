import React from 'react';

class Botao extends React.Component{
    // toda vez que criamos um evento , click, submit ... nós temos acesso a um objeto evento js
    marcar(event){
        
        this.props.marcarGol()
    }

    render(){
        return (
            <button onClick={this.marcar.bind(this)}>Gol</button>
        )
    }
}

export default Botao;