import React from 'react'
import { Login } from '@/presentation/pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
