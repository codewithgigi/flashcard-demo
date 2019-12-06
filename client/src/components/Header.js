import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background-color: white;
  border-bottom: 1px solid rgb(176, 172, 172);
  font-family: 'Segoe UI', Arial, sans-serif;
  display: flex;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    dipaly: block;
  }
`
const Logo = styled.div`
  display: flex;
  justify-content: left;
  color: black;
  font-size: 1.5rem;
  width: 20%;
  text-transform: capitalize;
  align-items: center;
  padding-left: 0.5rem;

  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`
const TopNav = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  color: black;

  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`

const List = styled.li`
  font-size: 1rem;
  display: inline;
  padding-right: 0.5rem;
  text-transform: capitalize;

  &:hover {
    color: #007882
    cursor: pointer;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <Logo>Fun Flashcards</Logo>
      <TopNav>
        <ul>
          <List>Make Flashcards</List>
        </ul>
      </TopNav>
    </HeaderContainer>
  )
}

export default Header
