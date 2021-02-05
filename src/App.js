import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import Header from "./view/components/Header";
import {Switch, Route} from "react-router-dom";


import Home from "./view/pages/Home";
import User from "./view/pages/User";

const Globalstyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    vertical-align: top;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

const App = () => {
    return (
        <Container>
            <Globalstyle />
            <Header/>
            <Switch> // 하나의 라우트만 보여주기 위해 사용하는 태
                <Route exact path={'/'} component={Home}/>
                <Route path={'/User'} component={User}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;
export default App;
