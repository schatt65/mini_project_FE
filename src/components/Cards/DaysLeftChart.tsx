import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  font-family: sans-serif;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ percent: number }>`
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  background-color: #4caf50;
  transition: width 0.5s ease-in-out;
`;

const InfoText = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

const getDaysInMonth = (year: number, month: number): number =>
  new Date(year, month + 1, 0).getDate();

const getTodayProgress = (): {
  daysLeft: number;
  totalDays: number;
  daysPassed: number;
} => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  const totalDays = getDaysInMonth(year, month);
  const daysLeft = totalDays - day;
  const daysPassed = day;

  return { daysLeft, totalDays, daysPassed };
};

const DaysLeftProgressBar: React.FC = () => {
  const { daysLeft, totalDays, daysPassed } = getTodayProgress();
  const progressPercent = (daysPassed / totalDays) * 100;

  return (
    <Container>
      <Title>Month Progress</Title>
      <ProgressBar>
        <ProgressFill percent={progressPercent} />
      </ProgressBar>
      <InfoText>
        {daysLeft} day(s) left out of {totalDays}
      </InfoText>
    </Container>
  );
};

export default DaysLeftProgressBar;
