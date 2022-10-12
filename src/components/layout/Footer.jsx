import React from "react";
import styled from "styled-components";
import { SiInstagram, SiNotion } from "react-icons/si";
import logo from "../../../src/assets/havit.png";
const Footer = () => {
  return (
    <StyledFooter>
      <StyledIcons>
        <img
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            width: "70px",
          }}
          src={logo}
          alt="logo"
        ></img>
        <SiInstagram
          onClick={() =>
            window.open(
              "https://instagram.com/havit_life?igshid=YmMyMTA2M2Y=",
              "_blank"
            )
          }
          style={{
            fontSize: "22px",
            marginRight: "10px",
            marginLeft: "10px",
            color: "#b0b0b0",
          }}
        />
        <SiNotion
          onClick={() =>
            window.open(
              "https://trusting-jobaria-326.notion.site/About-Havit-c126479bc8b542c3b4391deabf904d74",
              "_blank"
            )
          }
          style={{
            fontSize: "22px",
            color: "#b0b0b0",
          }}
        />
      </StyledIcons>

      <div
        style={{
          marginLeft: "10px",
          color:"#b0b0b0",
        }}
      >
        Copyright 2022 Havit. All rights reserved.
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  background-color: #f6f9fa;
  width: 100%;
`;
const StyledIcons = styled.div`
  margin-top: 20px;
`;

export default Footer;
