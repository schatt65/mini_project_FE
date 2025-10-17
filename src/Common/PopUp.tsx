import React, { type FC, type ReactNode } from "react";
import styled from "styled-components";
import { Text } from "../Common.styled";
import CrossIcon from "../icons/CrossIcon";

const PopUpContent = styled.div`
  position: relative;
  max-width: 80%;
  max-height: 80%;
`;
const PopUpWrapper = styled.div`
  width: 567px;
  height: 150px;
  display: flex;
  padding: 24px;
  background-color: white;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const ButtonWrapper = styled.div`
  display: flex;
  /* padding: var(--Spacing-Mobile-Layout-Horizontal-Padding, 16px) var(--Spacing-Mobile-Layout-Vertical-Padding, 24px); */
  padding: 16px 24px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: flex-end;
  /* gap: var(--Spacing-Mobile-Layout-Horizontal-Padding, 16px); */
  gap: 16px;
  align-self: stretch;
`;

const Button = styled.div<{
  bgColor?: string;
  txtColor?: string;
  size?: string;
}>`
  padding: 12px 16px;
  background-color: ${(props) => props.bgColor || "white"};
  /* border-radius: var(--Corners-Large, 24px); */
  border-radius: 24px;
  /* border: 2px solid var(--Colours-Blue-Button-Default, #196cff); */
  border: 2px solid #196cff;
  /* background: var(--Colours-White-Canvas-Background, #fff); */
  /* background: #fff; */
  color: ${({ txtColor }) => txtColor || "black"};
  font-size: ${({ size }) => size || "16px"};
`;

const PopUpOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
interface PopUpProps {
  //   onOpen: boolean;
  onClose: () => void;
  // children?: ReactNode;
}

const PopUp: FC<PopUpProps> = ({ onClose }) => {
  //   if (!onOpen) return null;
  return (
    <PopUpOverlay onClick={onClose}>
      <PopUpContent onClick={(e) => e.stopPropagation()}>
        <PopUpWrapper>
          <Head>
            <Text size="28px" weight={700}>
              Moving business locations?
            </Text>
            <Text onClick={onClose}>
              <CrossIcon />
            </Text>

            {/* <Text size="22px">
          X
        </Text> */}
          </Head>
          <Text>Call us on 13 39 08 and we’ll organise your move.</Text>
          <ButtonWrapper>
            <Button size="18px">Cancel</Button>
            <Button bgColor="#196CFF" txtColor="white" size="18px">
              Call 13 39 08
            </Button>
          </ButtonWrapper>
        </PopUpWrapper>
      </PopUpContent>
    </PopUpOverlay>
  );
};

export default PopUp;
