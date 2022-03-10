import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'

const CardHome = () => {
  return (
    <Container>
      <Card />
    </Container>
  )
}

export default CardHome

const Container = styled.div`
height: 100%;
min-height: 100vh;
width: 100%;
background-color: #F2F2F2;

`