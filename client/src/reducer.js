export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_FLASHCARD':
      const data = {
        ...state,
        flashcards: [
          ...new Set([...state.flashcards, ...action.payload]),
        ],
      }

      return data
    default:
      return state
  }
}
