import React from "react";
import styled from "styled-components";
import sedansCar from "../Image/sedan.png";

const Detail1 = ({ sedan, sedanChange, suv }) => {
  return (
    <div>
      {sedan || suv ? null : (
        <Container>
          <Wrapper>
            <ImgDiv>
              <ImageL src={sedansCar} alt="A Red sedans Car" />
            </ImgDiv>
            <TextDivCtrl>
              <TextDiv>
                <TitleText>Sedans</TitleText>
                <ContentText>
                  Choose a sedan for its affordability and excellent fuel
                  economy. Ideal for cruising in the city or on your next road
                  trip.
                </ContentText>
                <Button onClick={sedanChange}>Go Back</Button>
              </TextDiv>
            </TextDivCtrl>
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default Detail1;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;
const Wrapper = styled.div`
  width: 700px;
  height: 400px;
  background-color: #e28525;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;
const ImgDiv = styled.div`
  height: 100%;
  width: 350px;
`;
const ImageL = styled.img`
  width: 350px;
  height: 100%;
  object-fit: contain;
`;
const TextDivCtrl = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextDiv = styled.div`
  height: 90%;
  width: 300px;
  font-family: quicksand;
`;
const TitleText = styled.div`
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
`;
const ContentText = styled.div`
  font-size: 18px;
  /* width: 90%; */
  margin-bottom: 50px;
  color: #fff;
  line-height: 1.6;
`;
const Button = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  font-family: quicksand;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  color: #e28525;
  cursor: pointer;
`;
