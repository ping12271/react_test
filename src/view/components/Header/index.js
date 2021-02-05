import React, {useState} from "react";
import styled from "styled-components";
import {Link, useHistory} from 'react-router-dom';
import SideMenu from './SideMenu';
import {AiOutlineMenu} from 'react-icons/ai';

const Header = () => {

    const [sideMenu, setSideMenu] = useState(false);
    //상태관리 훅

    const handleSideMenu = () => {
        setSideMenu(!sideMenu)
    }

    return (
        <>
            <Container>
                <Logo>lala</Logo>
                <Gnb>
                    <Nav>
                        <NavItem>
                            <NavLink to={'./'}>Home</NavLink>
                            {/*<Link to={"/"}>Home</Link>*/}
                        </NavItem>
                        <NavItem>
                            <NavLink to={'/user'}>User</NavLink>
                            {/*<Link to={"/user"}>User</Link>*/}
                        </NavItem>
                    </Nav>
                    <ButtonMenu onClick={handleSideMenu}>
                        <AiOutlineMenu />
                    </ButtonMenu>
                </Gnb>
            </Container>
            <SideMenu openSideMenu={sideMenu}/>
        </>
    )
}

const Container = styled.div`
  position: relative;
  z-index: 1000;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 10px rgba(0,0,0,.2);
`;

const Logo = styled.div`
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 500;
`;

const Gnb = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
`;

const NavItem = styled.div`

`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 25px;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: pink;
  }
`;

const ButtonMenu = styled.div`
  display: flex;
  font-size: 22px;
  padding: 8px;
  margin-left: 30px;
  cursor: pointer;
`;
export default Header;