import React from "react";
import styled from "styled-components";
import BarChartMapping from "./BarChartMapping";
import DaysLeftProgressBar from "./DaysLeftChart";
import SemiCircleProgressBar from "./SemiCircle";

const FlexWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const rowItem = styled.div`
  flex-basis: 100%;
  min-width: 0;
`;
const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  width: 250px;
  height: 250px;
`;
const TOU = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  width: 350px;
  height: 180px;
`;

const BillPred = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  width: 350px;
  height: 180px;
`;
const Card = () => {
  return (
    <div>
      <FlexWrapper>
        <FlexDiv>
          <TOU>
            <BarChartMapping value={70} />
          </TOU>
          <BillPred>
            <DaysLeftProgressBar />
          </BillPred>
          <StyledCard>
            <SemiCircleProgressBar />
          </StyledCard>
        </FlexDiv>
        <FlexDiv>
          <StyledCard></StyledCard>
          <StyledCard></StyledCard>
          <StyledCard></StyledCard>
        </FlexDiv>
      </FlexWrapper>
    </div>
  );
};

export default Card;
