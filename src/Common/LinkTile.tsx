import { type HTMLAttributes, type JSX } from "react";
import { Link, type LinkProps, type To } from "react-router-dom";
import styled from "styled-components";

export const SLinkTile = styled(Link)<{
  "data-button-theme": "normal" | "bold";
}>`
  display: flex;
  min-height: 92px;
  flex-direction: column;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: start;
  justify-content: flex-start;
  border-radius: 12px;
  transition: background 0.2s;
  cursor: pointer;
  gap: 6px;
  padding: 14px 6px 8px;
  text-decoration: none;
  border: 2px solid transparent;

  &[data-button-theme="normal"] {
    &:hover {
      background: rgb(244, 245, 245);
    }
  }

  &[data-button-theme="bold"] {
    background-color: #ffffff;
    border: 1px solid #edeeef;
    width: 100%;
    border-radius: 12px;
    opacity: 1;
    padding: 6px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s ease;
    gap: 0.5rem;
    height: 108.5px;
    padding: 6px;
    justify-content: center;

    &:hover {
      box-shadow: 0px 2.53px 2.53px 0px #0000000d;
    }
  }

  &:focus-visible {
    outline: 2px solid blue;
  }

  @keyframes circle__svg {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  &[aria-busy="true"] {
    pointer-events: none;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      animation: circle__svg 0.75s linear infinite;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      content: url("data:image/svg+xml,%3Csvg viewBox='-25 -25 250 250' version='1.1' xmlns='http://www.w3.org/2000/svg' style='transform:rotate(-90deg)'%3E%3Ccircle r='90' cx='100' cy='100' fill='transparent' stroke='%23ffffff' stroke-width='16px' stroke-dasharray='565.48px' stroke-dashoffset='0'%3E%3C/circle%3E%3Ccircle r='90' cx='100' cy='100' stroke='%23f26722' stroke-width='10' stroke-linecap='round' stroke-dashoffset='118.692px' fill='transparent' stroke-dasharray='565.48px'%3E%3C/circle%3E%3C/svg%3E");
    }
  }
`;

const STileLabel = styled.span`
  font-size: 14px;
  font-weight: 550;
  letter-spacing: 0px;
  line-height: 1.2;
  display: block;
  text-align: center;
  color: blue;
`;

const SNewBadge = styled.div`
  margin-top: 2px;
  background: blue;
  color: white;
  border-radius: 4px;
  padding: 0 5px;
`;

const SNewBadgeText = styled.span`
  letter-spacing: 1.5px;
  font-size: 13px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  display: inline-block;
`;

export type LinkTileProps = {
  to: To;
  src: string;
  srcAlt: string;
  label: string;
  isNew?: boolean;
  $type?: "normal" | "bold";
  $loading?: boolean;
} & HTMLAttributes<HTMLAnchorElement> &
  LinkProps;

export function LinkTile(props: LinkTileProps): JSX.Element {
  const { to, src, srcAlt, label, isNew, $type, $loading, ...rest } = props;

  return (
    <SLinkTile
      to={to}
      data-button-theme={$type ?? "normal"}
      aria-busy={$loading}
      {...rest}
    >
      {$loading ? null : (
        <>
          <img src={src} width={32} height={32} alt={srcAlt} />
          <STileLabel data-testid="linkLabel" color="blue">
            {label}
          </STileLabel>
          {isNew && (
            <SNewBadge>
              <SNewBadgeText>NEW</SNewBadgeText>
            </SNewBadge>
          )}
        </>
      )}
    </SLinkTile>
  );
}
