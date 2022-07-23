import React from "react";

import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #111111;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & div {
    margin-top: 20px;
  }
  & div img {
    margin: 0 5px;
  }
`;
export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <img src="/images/twiter.svg" alt="" srcset="" />
        <img src="/images/insta.svg" alt="" srcset="" />
        <img src="/images/facebook.svg" alt="" srcset="" />
        <img src="/images/twiter.svg" alt="" srcset="" />
        <img src="/images/insta.svg" alt="" srcset="" />
        <img src="/images/facebook.svg" alt="" srcset="" />
      </div>

      <div>© Loya 2020 | PRIVACY Policy | GET IN Touch</div>
    </FooterContainer>
  );
}
