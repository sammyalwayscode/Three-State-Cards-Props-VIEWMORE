import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import Detail1 from "../DetailPages/Detail1";
import Detail2 from "../DetailPages/Detail2";
import icon3 from "../Image/icon-luxury.svg";
import icon1 from "../Image/icon-sedans.svg";
import icon2 from "../Image/icon-suvs.svg";

const CardHome = () => {
  const [sedan, setSedan] = useState(true);
  const [suv, setSuv] = useState(true);

  const sedanChange = () => {
    setSedan(!sedan);
    console.log(sedan);
  };

  const suvChange = () => {
    setSuv(!suv);
    console.log(suv);
  };
  return (
    <div>
      {sedan || suv ? (
        <Container>
          <Card
            iconImg={icon1}
            cardTitle="Sedans"
            cardContent="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip. "
            bgColor={"#E28525"}
            btnColor={"#E28525"}
            rediusPop={"8px 0 0 8px"}
            clickFunction={sedanChange}
          />
          <Card
            iconImg={icon2}
            cardTitle="SUVs"
            cardContent="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
            bgColor={"#016972"}
            btnColor={"#016972"}
            clickFunction={suvChange}
          />
          <Card
            iconImg={icon3}
            cardTitle="Luxury"
            cardContent="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
            bgColor={"#00403F"}
            btnColor={"#00403F"}
            rediusPop={" 0 8px 8px 0 "}
          />
        </Container>
      ) : null}
      {sedan || suv
        ? null
        : <Detail1 sedan={sedan} sedanChange={sedanChange} suv={suv} /> || (
            <Detail2 suv={suv} suvChange={suvChange} sedan={sedan} />
          )}
    </div>
  );
};

export default CardHome;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
