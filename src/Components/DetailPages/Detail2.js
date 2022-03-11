import React from "react";
import styled from "styled-components";
import suvCar from "../Image/suv.png";

const Detail2 = ({ suv, suvChange, sedan }) => {
  return (
    <div>
      {suv || sedan ? null : (
        <Container>
          <Wrapper>
            <ImgDiv>
              <ImageL src={suvCar} alt="A black suv Car" />
            </ImgDiv>
            <TextDivCtrl>
              <TextDiv>
                <TitleText>SUVs</TitleText>
                <ContentText>
                  Take an SUV for its spacious interior, power, and versatility.
                  Perfect for your next family vacation and off-road adventures.
                </ContentText>
                <Button onClick={suvChange}> Go Back</Button>
              </TextDiv>
            </TextDivCtrl>
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default Detail2;

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
  background-color: #016972;
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
  color: #016972;
  cursor: pointer;
`;
