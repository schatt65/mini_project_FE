import React, { useState, type FC, type JSX } from "react";
import styled from "styled-components";
import DirectDebitIcon from "../icons/DirectDebitIcon";
import MoveHomeIcon from "../icons/MoveHomeIcon";
import ShowAllIcon from "../icons/ShowAllIcon";
import { Text } from "../Common.styled";
import Modal from "./Modal";
import PaymentExtension from "../icons/PaymentExtension";
import PlanInfo from "../icons/PlanInfo";
import PopUp from "./PopUp";

const MOVE_HOME_URL = "https://mongoosejs.com/docs/";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  max-width: 400px;
`;

const TileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: #f8f8f8;
  width: 270px;
  padding: 36px 24px 24px 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 0.5px solid black;
  border-radius: 12px;
  gap: 16px;
  cursor: pointer;
`;

const CardHeading = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
`;
const Tile = styled.div`
  display: flex;
  /* width: 75px; */
  padding: 14px 4px 8px 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  &:hover {
    background-color: #dfefca;
    border-radius: 12px;
  }
`;

const AllServiceModal = styled.div`
  display: flex;
  width: 382px;
  height: 570px;
  padding: 24px;
  /* overflow-y: hidden; */

  /* background-color: aliceblue; */
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
`;

const NewServices = styled.div`
  display: flex;
  /* width: 350px; */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
`;

const TileCard = styled.div`
  display: flex;
  padding: 15.734px 33.198px 19px 34.469px;
  background-color: white;
  border-radius: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9.732px;
  flex: 1 0 0;
  margin: 4px;
  &:hover {
    box-shadow: 4px 8px 2px rgba(0, 0, 0, 0.2);
  }
`;

const Row = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
`;
interface TileType {
  icon: FC;
  label: string;
  handleClick?: () => void;
}
//react fc
const OnlineServicesTile: FC = () => {
  const [isAllModalOpen, setIsAllModalOpen] = useState<boolean>(false);
  const [isMIMOModalOpen, setIsMIMOModalOpen] = useState<boolean>(false);
  const handleAllServicesClick = () => {
    setIsAllModalOpen(true);
  };
  const handleMIMOServicesClick = () => {
    setIsMIMOModalOpen(true);
  };
  const closeModal = () => setIsAllModalOpen(false);
  const closeMIMOModal = () => setIsMIMOModalOpen(false);
  if (isAllModalOpen && isMIMOModalOpen) {
    closeModal();
  }
  const handleMoveHome = () => {
    window.location.href = MOVE_HOME_URL;
  };
  const tilearr: TileType[] = [
    {
      icon: MoveHomeIcon,
      label: "Move Home",
      handleClick: handleMIMOServicesClick,
    },
    {
      icon: DirectDebitIcon,
      label: "Direct Debit",
      handleClick: () => console.log("clicked"),
    },
    {
      icon: ShowAllIcon,
      label: " All Services",
      handleClick: handleAllServicesClick,
    },
  ];

  const tileArrInModal1: TileType[] = [
    {
      icon: MoveHomeIcon,
      label: "Move Home",
      handleClick: handleMIMOServicesClick,
    },
    {
      icon: DirectDebitIcon,
      label: "Direct Debit",
      handleClick: () => console.log("clicked"),
    },
  ];

  const tileArrInModal2: TileType[] = [
    {
      icon: MoveHomeIcon,
      label: "Move Home",
      handleClick: handleMIMOServicesClick,
    },
    {
      icon: DirectDebitIcon,
      label: "Direct Debit",
      handleClick: () => console.log("clicked"),
    },
    {
      icon: PaymentExtension,
      label: "Payment Extension",
      handleClick: () => console.log("clicked"),
    },
    {
      icon: PlanInfo,
      label: "Plan Info",
      handleClick: () => console.log("clicked"),
    },
  ];

  return (
    <div>
      <Wrapper>
        <CardHeading>Online Services</CardHeading>
        <TileWrapper>
          {tilearr.map((tile, idx) => (
            <Tile key={idx} onClick={tile.handleClick}>
              {<tile.icon />}
              <Text size="14px" weight={550} color="#196CFF">
                {tile.label}
              </Text>
            </Tile>
          ))}
        </TileWrapper>
      </Wrapper>
      {isAllModalOpen && (
        <Modal onClose={closeModal}>
          {/* <AllServiceModal>Holaaaa</AllServiceModal> */}
          <AllServiceModal>
            <CardHeading>Online Services</CardHeading>
            <NewServices>
              <Text size="16px" weight={600}>
                New Services
              </Text>
              <Row>
                {tileArrInModal1.map((tile, idx) => (
                  <TileCard key={idx} onClick={tile.handleClick}>
                    {<tile.icon />}
                    <Text size="14px" weight={550} color="#196CFF">
                      {tile.label}
                    </Text>
                  </TileCard>
                ))}
              </Row>
            </NewServices>

            <NewServices>
              <Text size="16px" weight={600}>
                Managed Services
              </Text>
              <Row>
                {tileArrInModal2.map((tile, idx) => (
                  <TileCard key={idx} onClick={tile.handleClick}>
                    {<tile.icon />}
                    <Text size="14px" weight={550} color="#196CFF">
                      {tile.label}
                    </Text>
                  </TileCard>
                ))}
              </Row>
            </NewServices>
          </AllServiceModal>
        </Modal>
      )}
      {isMIMOModalOpen && <PopUp onClose={closeMIMOModal} />}
    </div>
  );
};

export default OnlineServicesTile;
