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

export const Text1 = styled.div<{
  size?: string;
  weight?: number;
  fontFamily?: string;
  display?: string;
  color?: string;
  margin?: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
  border?: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
  decoration?: string;
  width?: string;
  height?: string;
  align?: string;
}>`
  display: ${(props) => (props.display ? props.display : "block")};
  margin-top: ${(props) => props.margin?.top};
  margin-right: ${(props) => props.margin?.right};
  margin-bottom: ${(props) => props.margin?.bottom};
  margin-left: ${(props) => props.margin?.left};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "")};
  font-size: ${(props) => (props.size ? props.size : "")};
  font-weight: ${(props) => (props.weight ? props.weight : 100)};
  color: ${(props) => (props.color ? props.color : "block")};
  text-decoration: ${(props) => props?.decoration};
  border-bottom: ${(props) => props.border?.bottom};
  cursor: ${(props) => (props.border?.bottom ? "pointer" : "")};
  border-top: ${(props) => props.border?.top};
  border-left: ${(props) => props.border?.left};
  border-right: ${(props) => props.border?.right};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow-wrap: break-word;
  text-align: ${(props) => props.align};
`;
