import React from 'react'
import styled from 'styled-components'
import { grey } from '@material-ui/core/colors'

const Container = styled.div`
  background-color: white;
  font-family: 'Segoe UI', Arial, sans-serif;
  display: flex;
  margin-bottom: 1rem;
`
const List = styled.li`
  font-size: 1rem;
  display: block;
  padding: 5px 0;
  text-transform: capitalize;

  &:hover {
    color: #007882
    cursor: pointer;
  }
`

function Header() {
  return (
    <Container>
      <ul>
        <h5 style={{ color: 'grey' }}>Categories</h5>
        <List>Programming Jokes</List>
        <List>Make Flashcards Fun</List>
      </ul>
    </Container>
  )
}

export default Header