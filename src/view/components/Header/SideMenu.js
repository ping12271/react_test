import React from "react";
import styled from "styled-components";

const SideMenu = (props) => {

  return (
    <Container className={props.openSideMenu ? 'openSideMenu' : ''}>
      SideMenu
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1500;
  width: 300px;
  background: #f5f5f5;
  border-right: 1px solid #eee;
  transform: translateX(-100%);
  transition: .4s;
  &.openSideMenu {
    transform: none;
  }
`;

export default SideMenu;