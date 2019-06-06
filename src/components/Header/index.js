import React from "react";
import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars1.githubusercontent.com/u/28870565?v=4"
        alt="Avatar"
      />
      Fernando Vieira
    </User>
  </Container>
);

export default Header;
