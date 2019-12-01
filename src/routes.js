import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Main from './pages/main/index'
import Product from './pages/product/index'

const Routes = () => {
    return(

    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/products/:id' component={Product}/>
    </Switch>
    )
    
}

export default Routes;