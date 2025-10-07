import styled from "styled-components";

export const Text = styled.div<{
  size?: string;
  weight?: number;
  color?: string;
  margin?: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
}>`
  margin-top: ${(props) => props.margin?.top};
  margin-right: ${(props) => props.margin?.right};
  margin-bottom: ${(props) => props.margin?.bottom};
  margin-left: ${(props) => props.margin?.left};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-weight: ${(props) => (props.weight ? props.weight : 100)};
  color: ${(props) => (props.color ? props.color : "block")};
  line-height: 24px;
`;
