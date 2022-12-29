/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useContext } from 'react'
import Context from '@/presentation/context/form/form-context'

type Props = {
  text: string
}

const Submit: React.FC<Props> = ({ text }: Props) => {
  const { state } = useContext(Context)
  return (
    <button data-testid='submit' disabled={state.isFormInvalid} type='submit'>{text}</button>
  )
}

export default Submit
