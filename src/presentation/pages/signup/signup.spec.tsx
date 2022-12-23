import { fireEvent, render, RenderResult } from '@testing-library/react'
import React from 'react'
import Signup from './signup'
import { Helper, ValidationStub } from '@/presentation/test'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}
const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const sut = render(
    <Signup
      validation={validationStub}
    />
  )
  return {
    sut
  }
}

const populateField = (sut: RenderResult, fieldName: string, value = faker.random.word()): void => {
  const emailInput = sut.getByTestId(fieldName)
  fireEvent.input(emailInput, { target: { value } })
}

describe('SignUp Component', () => {
  test('Should start with initial state ', async () => {
    const validationError = 'Campo Obrigatorio'
    const { sut } = makeSut({ validationError })
    Helper.testChildCount(sut, 'error-wrap', 0)
    Helper.testButtonIsDisabled(sut, 'submit', true)
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', 'Campo Obrigatorio')
    Helper.testStatusForField(sut, 'password', 'Campo Obrigatorio')
    Helper.testStatusForField(sut, 'passwordConfirmation', 'Campo Obrigatorio')
  })

  test('should show name error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populateField(sut, 'name')
    Helper.testStatusForField(sut, 'name', validationError)
  })
})
