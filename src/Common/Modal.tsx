import React, { type PropsWithChildren, useEffect } from "react";
import styled from "styled-components";

const SModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const SModal = styled.div`
  margin: 15px;
  height: auto;
  max-height: 100vh;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 10001;
  overflow: clip; // Ensure border radius clips children

  @media (min-width: 567px) {
    width: 600px;
  }
`;

export type ModalProps = PropsWithChildren<{
  onClose: React.MouseEventHandler<HTMLElement> | undefined;
}> &
  React.HTMLAttributes<HTMLDivElement>;

export function Modal(props: ModalProps) {
  const { onClose, children, ...rest } = props;

  useEffect(() => {
    // Handle background scrolling
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    // Handle escape key to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose(e as unknown as React.MouseEvent<HTMLElement>);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const preventClickBubbling = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <SModalBackground
      id="modal-wrapper"
      data-testid="modal-wrapper"
      onClick={onClose}
    >
      <SModal
        id="model-container"
        onClick={preventClickBubbling}
        aria-modal="true"
        {...rest}
      >
        {children}
      </SModal>
    </SModalBackground>
  );
}
