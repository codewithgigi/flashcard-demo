import gql from 'graphql-tag'
import { FlashcardFragments } from './fragments'

export const GET_FLASHCARDS = gql`
  query flashcards {
    flashcards {
      ...flashcard
    }
  }
  ${FlashcardFragments.flashcard}
`

export const GET_FLASHCARD = gql`
  query flashcard($id: ID!) {
    flashcard(id: $id) {
      ...flashcard
    }
  }
  ${FlashcardFragments.flashcard}
`
