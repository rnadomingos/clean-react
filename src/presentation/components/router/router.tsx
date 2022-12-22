import { Signup } from '@/presentation/pages'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={makeLogin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
