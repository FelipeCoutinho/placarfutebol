import React from 'react';
import Botao from './Botao'

class Time extends React.Component{

    render(){
        
        return (
            <div>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.gols}</h2>
                <Botao marcarGol={this.props.marcarGol}/>
            </div>
        )
    }
}

export default Time;