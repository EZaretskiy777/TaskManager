import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderPopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
  &:target {
    display: block;
  }
`;

export const PopUserSetBtn = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${({ theme }) => theme.colors.buttonColor};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.buttonColor};
  &:hover {
    background-color: #33399b;
    border-color: #33399b;
    a {
      color: #ffffff;
    }
  }
`;

export const PopUserSetBtnLink = styled(Link)`
  color: ${({ theme }) => theme.colors.buttonColor};
`;

export const PopUserSetName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const PopUserSetThemeP = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const PopUserSetThemeInput = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }
  &:checked::before {
    left: 12px;
  }
`;
