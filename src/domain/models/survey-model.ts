export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAnswer[]
  date: Date
  didAnswer: boolean
}

export type SurveyAnswer = {
  image?: string
  answer: string
}