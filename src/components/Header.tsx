import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/StyledHeader";
import { StyledContainer } from "./styles/StyledContainer";
import { Button } from "./styles/StyledButton";
import { Flex } from "./styles/StyledFlex";

export default function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <Nav>
          <Logo src="/images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="/images/illustration-mockups.svg" alt="" />
        </Flex>
      </StyledContainer>
    </StyledHeader>
  );
}
