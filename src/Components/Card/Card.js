import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Conatiner bgColor={props.bgColor} rediusPop={props.rediusPop}>
      <Wrapper>
        <IconCtrl>
          <Icon src={props.iconImg} alt="Icon" />
        </IconCtrl>
        <Title> {props.cardTitle} </Title>
        <Content>{props.cardContent}</Content>
        <Button onClick={props.clickFunction} btnColor={props.btnColor}>
          {" "}
          Learn More{" "}
        </Button>
      </Wrapper>
    </Conatiner>
  );
};

export default Card;

const Conatiner = styled.div`
  height: 400px;
  width: 260px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: quicksand;
  border-radius: ${({ rediusPop }) => rediusPop};
`;
const Wrapper = styled.div`
  height: 85%;
  width: 80%;
`;
const IconCtrl = styled.div`
  margin-bottom: 30px;
`;
const Icon = styled.img`
  width: 45px;
`;
const Title = styled.div`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
`;
const Content = styled.div`
  font-size: 14px;
  width: 90%;
  margin-bottom: 50px;
  color: #fff;
  line-height: 1.6;
`;
const Button = styled.button`
  padding: 10px 25px;
  background-color: #fff;
  font-family: quicksand;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  color: ${({ btnColor }) => btnColor};
  cursor: pointer;
`;
