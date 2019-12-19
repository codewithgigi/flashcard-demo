import React from 'react'
import styled from 'styled-components'

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
        <List>Category 1</List>
        <List>Category 2</List>
      </ul>
    </Container>
  )
}

export default Header
