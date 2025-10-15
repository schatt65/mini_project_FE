import React, { useState } from "react";
import styled from "styled-components";
import DirectDebitIcon from "../icons/DirectDebitIcon";
import MoveHomeIcon from "../icons/MoveHomeIcon";
import ShowAllIcon from "../icons/ShowAllIcon";
import { Text } from "../Common.styled";
import Modal from "./Modal";

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
  background-color: aliceblue;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
`;
const OnlineServicesTile = () => {
  const [isAllModalOpen, setIsAllModalOpen] = useState<boolean>(false);
  const handleAllServicesClick = () => {
    setIsAllModalOpen(true);
  };
  const closeModal = () => setIsAllModalOpen(false);

  return (
    <div>
      <Wrapper>
        <CardHeading>Online Services</CardHeading>
        <TileWrapper>
          <Tile>
            <MoveHomeIcon />
            <Text size="14px" weight={550} color="#196CFF">
              Move Home
            </Text>
          </Tile>
          <Tile>
            <DirectDebitIcon />
            <Text size="14px" weight={550} color="#196CFF">
              Direct Debit
            </Text>
          </Tile>
          <Tile onClick={handleAllServicesClick}>
            <ShowAllIcon />
            <Text size="14px" weight={550} color="#196CFF">
              All Services
            </Text>
          </Tile>
        </TileWrapper>
      </Wrapper>
      {isAllModalOpen && (
        <Modal onClose={closeModal}>
          {/* <AllServiceModal>Holaaaa</AllServiceModal> */}
          <div>Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          <div>Holaaa</div>
          <div>Holaaa</div>
          <div>Holaaa</div>
          <div>Holaaa</div>
          <div>Holaaa</div>
          <div>Holaaa</div>
          <div>Holaaa</div>
          <div>Holaaa</div>
          <div>Holaaa</div>
          <div>Holaaa</div>
        </Modal>
      )}
    </div>
  );
};

export default OnlineServicesTile;
