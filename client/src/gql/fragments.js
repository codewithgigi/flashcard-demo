import gql from 'graphql-tag'

export const FlashcardFragments = {
  flashcard: gql`
    fragment flashcard on Flashcard {
      _id
      category
      front
      back
      createdAt
      image
    }
  `,
}
