import type { FC, ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
  //   onOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const ModalOverlay = styled.div`
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
const ModalContent = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: #e5ebea;
  border-radius: 12px;
  box-shadow: 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 80%;
  max-height: 80%;
  /* overflow-y: hidden; */
  padding: 20px;
`;
const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  cursor: pointer;
  & > button {
    background-color: #ada9b7;
    padding: 6px;
    border: 0.2px solid black;

    &:hover {
      background-color: #829298;
      border: 0cap.2px solid black;
    }
  }
`;
const Modal: FC<ModalProps> = ({ onClose, children }) => {
  //   if (!onOpen) return;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <button>&times;</button>
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
