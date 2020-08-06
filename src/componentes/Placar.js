import React from 'react';
import Time from './Time';
import Partida from './Partida';
import './estilo.css';
import PropTypes from 'prop-types'

class Placar extends React.Component{

    constructor(){
        super()
        this.state = {
            golsCasa:0,
            golsVisitante:0
        }
    }

    marcarGolCasa(){
        this.setState({
            golsCasa:this.state.golsCasa +1
        })
    }
    marcarGolVisitante(){
        this.setState({
            golsVisitante:this.state.golsVisitante +1
        })
    }

    render(){
        const {casa,visitante,partida} = this.props;


        return(
            <div>

                <div id="Casa">
                    <Time nome={casa.nome}
                          gols={this.state.golsCasa}
                          marcarGol={this.marcarGolCasa.bind(this)}/>
                </div>

                <div id="Partida">
                    <Partida partida={partida} />
                </div>
                
                <div id="Visitante">
                    <Time nome={visitante.nome}
                          gols={this.state.golsVisitante}
                          marcarGol={this.marcarGolVisitante.bind(this)}
                          />
                </div>

            </div>
        )
    }
}

export default Placar;



// Placar.prototype = {
//     nome:PropTypes.string
// }

















