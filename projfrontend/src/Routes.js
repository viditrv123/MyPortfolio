import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';




const Routes=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/MyPortfolio/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;
