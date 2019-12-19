import React, { useState } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 350px;
  height: 200px;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  backface-visibility: hidden;
  &.card-back {
    background: blue;
    transform: rotateY(180deg);
  }
  &.card-front {
    background: gray;
  }
`

const CardWrapper = styled.div`
  display: flex;
  align-self: center;
  margin: 1rem;
  width: 350px;
  height: 200px;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  &.flipped {
    transform: rotateY(180deg);
  }
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? 'blue' : 'white')};
  color: ${props => (props.primary ? 'white' : 'blue')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
  width: 100px;
`

const Flashcard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState('')
  const toggleFlipped = () => {
    if (flipped === '') setFlipped('flipped')
    else setFlipped('')
  }
  return (
    <div>
      <CardWrapper className={flipped} onClick={toggleFlipped}>
        <Card className="card-front">
          <p>{flashcard.front}</p>
        </Card>
        <Card className="card-back">
          <p>{flashcard.back}</p>
        </Card>
      </CardWrapper>
      {/* <Button>Delete</Button>
      <Button primary>Edit</Button> */}
    </div>
  )
}
export default Flashcard
