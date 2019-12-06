import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Flashcards from './Flashcards'

import styled from 'styled-components'

const PageHeading = styled.h3`
  color: dark-grey;
  font-family: 'serif';
  padding-left: 3rem;
`

export default () => {
  return (
    <React.Fragment>
      <Header />
      <PageHeading>Flashcard Demo</PageHeading>
      <Flashcards />
    </React.Fragment>
  )
}
