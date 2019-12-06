import gql from 'graphql-tag'
import { FlashcardFragments } from './fragments'

export const CREATE_FLASHCARD = gql`
  mutation createFlashcard($flashcardInput: flashcardInput!) {
    createFlashcard(flashcardInput: $flashcardInput) {
      ...flashcard
    }
  }
  ${FlashcardFragments.flashcard}
`
export const DELETE_FLASHCARD = gql`
  mutation deleteFlashcard($flashcardId: ID!) {
    deleteFlashcard(flashcardI: $flashcardId)
  }
`
