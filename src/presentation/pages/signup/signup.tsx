/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'
import Styles from './signup-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presentation/components'
import Context from '@/presentation/context/form/form-context'

const Signup: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    nameError: 'Campo Obrigatorio',
    emailError: 'Campo Obrigatorio',
    passwordError: 'Campo Obrigatorio',
    passwordConfirmationError: 'Campo Obrigatorio',
    mainError: ''
  })

  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state }}>
        <form className={Styles.form}>
          <h2>Criar Conta</h2>
            <Input type="text" name='name' placeholder='Digite seu nome' />
            <Input type="email" name='email' placeholder='Digite seu e-mail' />
            <Input type="password" name='password' placeholder='Digite sua senha'/>
            <Input type="password" name='passwordConfirmation' placeholder='Repita sua senha'/>
          <button data-testid="submit" disabled className={Styles.submit} type='submit'>Criar</button>
          <span className={Styles.link}>Voltar para Login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Signup
