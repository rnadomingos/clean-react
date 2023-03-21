import { makeLogin, makeSignUp, makeSurveyList } from '@/main/factories/pages'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '@/main/adapter/current-account-adapter'
import { ApiContext } from '@/presentation/contexts'
import { PrivateRoute } from '@/presentation/components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountAdapter,
        getCurrentAccount: getCurrentAccountAdapter
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={makeLogin} />
          <Route path='/signup' component={makeSignUp} />
          <PrivateRoute path='/' exact component={makeSurveyList} />

        </Switch>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
