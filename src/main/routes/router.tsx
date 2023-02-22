import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { setCurrentAccountAdapter } from '@/main/adapter/current-account-adapter'
import { makeLogin } from '@/main/factories/pages/login/login-factory'
import { makeSignUp } from '@/main/factories/pages/signup/signup-factory'
import { ApiContext } from '@/presentation/contexts'
import { SurveyList } from '@/presentation/pages'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountAdapter
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={makeLogin} />
          <Route path='/signup' component={makeSignUp} />
          <Route path='/' component={SurveyList} />

        </Switch>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
