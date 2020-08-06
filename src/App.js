import React from 'react';
import { render } from 'react-dom';
import Placar from './componentes/Placar'
import Contador from './componentes/Contador'

var dados = {
        Partida:{
        estadio:"Mangueirão",
        data:"01/01/2020",
        hora:"14:00",
        },
        Casa:{
            nome:"Paysandu",
            GOLs:0
        },
        Visitante:{
            nome:"Remo",
            GOLs:0
        },
}

class App extends React.Component{
    render(){ 
        return (
            <Placar  partida = {  dados.Partida}
                            casa = {dados.Casa}
                            visitante = {dados.Visitante}
                            clima={1}
                            />
        )
    }
    // render(){
    //     return <Placar {...dados}/>;
    // }
}

export default App;

// App.prototype = {
   
// }