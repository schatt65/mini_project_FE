import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

const Svg = styled.svg`
  width: 200px;
  height: 100px;
`;

const Label = styled.div`
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

const SemiCircleLineProgressBar: React.FC = () => {
  const { daysLeft, totalDays, daysPassed } = getTodayProgress();

  const radius = 80;
  const stroke = 10;
  const circumference = Math.PI * radius;
  const progress = (daysPassed / totalDays) * circumference;

  return (
    <Wrapper>
      <Svg viewBox="0 0 200 100">
        <path
          d="M20,100 A80,80 0 0,1 180,100"
          fill="none"
          stroke="#eee"
          strokeWidth={stroke}
        />
        <path
          d="M20,100 A80,80 0 0,1 180,100"
          fill="none"
          stroke="#4caf50"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />
      </Svg>
      <Label>
        {daysLeft} day(s) left out of {totalDays}
      </Label>
    </Wrapper>
  );
};

export default SemiCircleLineProgressBar;
