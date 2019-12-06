import React from 'react'

import styled from 'styled-components'

const Container = styled.footer`
  clear: both;
  border-top: 1px solid #aaaaaa;
  color: black;
  padding: 0;
  text-align: center;
  margin: 0;
  position: fixed;
  bottom: 0px;
  width: 100%;
`

export default () => (
  <Container>
    <p>Tektuitive</p>
    <p>
      Contact:{' '}
      <a href="mailto:info@tektuitive.com">info@tektuitive.com</a>
    </p>
  </Container>
)
