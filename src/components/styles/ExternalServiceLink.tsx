// OptionCard.tsx
import React, { type ReactNode } from "react";
import styled from "styled-components";
import { FaTruck, FaExchangeAlt, FaArrowRight } from "react-icons/fa";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  max-width: 400px;
`;

const OptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: #0078d4;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const NewTag = styled.span`
  font-size: 12px;
  color: white;
  background-color: #0078d4;
  padding: 2px 6px;
  border-radius: 6px;
  margin-top: 4px;
  width: fit-content;
`;

const ArrowIcon = styled.div`
  font-size: 18px;
  color: #888;
`;

interface ExternalServiceLinkProps {
  outerIcon: ReactNode;
  innerIcon: ReactNode;
  linkLabel: string;
  onClick: () => void;
  // boxProps?: IBoxProps
  dataTestId?: string;
  isNew?: boolean;
}

const ExternalServiceLink = (
  props: ExternalServiceLinkProps
): React.JSX.Element => {
  return (
    <CardContainer>
      <OptionBox>
        <LeftSection>
          <IconWrapper>{props.outerIcon}</IconWrapper>
          <TextWrapper>
            <Label>{props.linkLabel}</Label>
            {props.isNew && <NewTag>NEW</NewTag>}
          </TextWrapper>
        </LeftSection>
        <ArrowIcon>{props.innerIcon}</ArrowIcon>
      </OptionBox>
    </CardContainer>
  );
};

export default ExternalServiceLink;
