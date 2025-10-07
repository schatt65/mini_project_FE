import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SLogo = styled.div`
  font-weight: 700;
  font-size: 30px;
`;
const NavWrapper = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 850px; */
  background-color: #b4bec7;
  color: black;
`;
const NavLinks = styled.div`
  /* border-bottom: 1px solid black; */
  display: flex;
  gap: 32px;
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
`;

const SLink = styled(NavLink)`
  /* border-bottom: 1px solid linear-gradient(#e66465, #9198e5); */

  &:hover {
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(#e66465, #9198e5);
    border-image-slice: 1;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }
  &.active {
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(#e66465, #9198e5);
    border-image-slice: 1;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }
`;

const Navbar = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";
  return (
    <NavWrapper>
      <SLogo>Testing</SLogo>
      <NavLinks>
        <SLink to="/course-goal" className={activeLink}>
          Course
        </SLink>
        <SLink to="/features">Feature</SLink>
        <SLink to="/cards">Cards</SLink>
        <SLink to="/bill">Bill Explainer</SLink>
      </NavLinks>
    </NavWrapper>
  );
};

export default Navbar;
