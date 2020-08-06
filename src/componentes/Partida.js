import React from 'react';

class Partida extends React.Component{
    render(){
        // extração ECS6
        const {partida} = this.props;

        return(
            <div>
                <div id="Partida">
                        {/* <h2>{this.props.dadosPartida.estadio}</h2>
                        <span> {this.props.dadosPartida.data} </span>
                        <span> às {this.props.dadosPartida.hora} </span> */}
                        <h2>{partida.estadio}</h2>
                        <span> {partida.data} </span>
                        <span> às {partida.hora} </span>
                </div>
            </div>
        )
    }
}

export default Partida;