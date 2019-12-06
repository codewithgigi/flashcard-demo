import React, { useState, useContext } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import { Input, Button } from '../styled/styledComponents'
import { CREATE_FLASHCARD } from '../gql/mutations'
import Context from '../context'
import { useMutation } from '@apollo/react-hooks'
import '../styled/styledComponents.js'

const AddFlashcard = () => {
  const [open, setOpen] = useState(false)
  const [error, setError] = useState()
  const [formValues, setFormValues] = useState({
    category: '',
    front: '',
    back: '',
  })

  const { dispatch } = useContext(Context)
  const [createFlashcard] = useMutation(CREATE_FLASHCARD)

  const updateFormField = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await createFlashcard({
        variables: { flashcardInput: formValues },
      })
      setOpen(false)

      dispatch({
        type: 'ADD_FLASHCARD',
        payload: [data.createFlashcard],
      })
    } catch (errors) {
      const { graphQLErrors, networkError } = errors
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) => {
          setError(message)
          setOpen(true)
          return message
        })

      if (networkError) {
        setError('Network server error', networkError)
        setOpen(true)
      }
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setOpen(!open)}
      >
        Add Flashcard
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add Flashcard
        </DialogTitle>
        <DialogContent>
          {error && <div>{error}</div>}
          <label>Category</label>
          <Input
            type="text"
            name="category"
            onChange={updateFormField}
            placeholder="Enter a category name (jokes, chemistry, math ..)"
          />

          <label>Front of card</label>
          <Input
            type="text"
            name="front"
            rows="5"
            onChange={updateFormField}
            placeholder="front of card.."
          />
          <label>Back of card</label>
          <Input
            type="text"
            name="back"
            rows="5"
            onChange={updateFormField}
            placeholder="Back of card.."
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: 'red' }}
          >
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddFlashcard
