import styled from "styled-components";
import { Link } from "react-router-dom";

export const PopExit = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  &:focus {
    display: block;
  }
`;

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const PopExitTtl = styled.div``;

export const PropExitTtlH2 = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const PopExitForm = styled.form``;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

export const PopExitExitYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;
  &:hover {
    background-color: #33399b;
  }
  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const PopExitExitYesButton = styled.div`
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopExitExitNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid
    var(--palette-navy-60, ${({ theme }) => theme.colors.buttonColor});
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.colors.buttonColor};
  &:hover {
    background-color: #33399b;
    border-color: #33399b;
  }
  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`;

export const PopExitExitNoLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.buttonColor};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #ffffff;
  }
`;
