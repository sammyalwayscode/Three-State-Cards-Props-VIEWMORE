import React from 'react'
import styled from 'styled-components'
import testIcon from '../Image/icon-sedans.svg'

const Card = () => {
  return (
    <Conatiner>
        <Wrapper>
            <IconCtrl>
                <Icon src={testIcon} alt='Icon' />
            </IconCtrl>
            <Title>Sedans</Title>
            <Content> Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip. </Content>
            <Button>Learn More</Button>
        </Wrapper>
    </Conatiner>
  )
}

export default Card

const Conatiner = styled.div`
height: 400px;
width: 260px;
background-color: darkcyan;
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
font-family: quicksand;
`
const Wrapper = styled.div`
height: 85%;
width: 80%;
background-color: aqua;
`
const IconCtrl = styled.div`
margin-bottom: 30px;
`
const Icon = styled.img``
const Title = styled.div``
const Content = styled.div``
const Button = styled.div``