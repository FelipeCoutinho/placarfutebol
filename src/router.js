import React from 'react'
import {Switch,Route} from 'react-router-dom'
import App from './App'
import Contador from './componentes/Contador'


function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/contador" component={Contador}/>
        </Switch>
    )
}

export default Routes;
