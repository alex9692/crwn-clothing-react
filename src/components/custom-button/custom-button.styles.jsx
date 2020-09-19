import styled, { css } from "styled-components";

const invertedBtn = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInBtn = css`
  background-color: #4285f4;
  border: none;
  color: #fff;

  &:hover {
    background-color: #357ae8;
  }
`;

const normalBtn = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const renderBtnStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInBtn;
  } else if (props.inverted) {
    return invertedBtn;
  } else {
    return normalBtn;
  }
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${renderBtnStyles}
`;
