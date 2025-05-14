import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const HeaderBlock = styled.div`
  height: 40px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div``;

export const HeaderLink = styled(Link)``;

export const HeaderLogoImg = styled.img`
  width: 85px;
`;

export const HeaderNav = styled.nav`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const HeaderBtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

export const HeaderBtnMainNewLink = styled(Link)`
  color: #ffffff;
`;

export const HeaderUserBtn = styled.button`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.userNameColor};
  border: none;
  background: transparent;
  &:hover {
    color: ${({ theme }) => theme.colors.userNameHoverColor};
  }

  &:hover::after {
    border-left-color: ${({ theme }) => theme.colors.userNameHoverColor};
    border-bottom-color: ${({ theme }) => theme.colors.userNameHoverColor};
  }
`;

export const CustomSelect = styled.select`
  padding: 8px 36px 8px 12px; /* справа место для стрелки */
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: border 0.2s ease, box-shadow 0.2s ease;
  appearance: none; /* убираем системную стрелку */
  cursor: pointer;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg viewBox='0 0 24 24' fill='gray' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:hover {
    border-color: #999;
  }

  &:focus {
    outline: none;
    border-color: #6a5acd;
    box-shadow: 0 0 0 2px rgba(106, 90, 205, 0.2);
  }
`;

export const CustomSelectOption = styled.option`
  font-size: 14px;
`;

export const UserImg = styled.img`
  width: 45px;
  background: transparent;
`;
