import styled from "styled-components";
import { Link } from "react-router-dom";
import { DayPicker } from "react-day-picker";

export const PopNewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  &:target {
    display: block;
  }
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;

export const PopNewCardFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopNewCardSubtitle = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopNewCardInput = styled.input`
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const PopNewTextArea = styled.textarea`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    padding-top: 6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

export const PopNewCardCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    width: 100%;
  }
  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarTitle = styled.p`
  padding: 0 !important;
  margin-bottom: 14px;
  padding: 0 7px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopNewCardCategories = styled.div`
  margin-bottom: 20px;
`;

export const PopNewCardCategoriesText = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopNewCardCategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;

export const PopNewCardCategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  cursor: pointer;
  background-color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ffe4c2";
      case "green":
        return "#b4fdd1";
      case "purple":
        return "#e9d4ff";
      case "gray":
        return "#94a6be";
    }
  }};

  color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ff6d00";
      case "green":
        return "#06b16e";
      case "purple":
        return "#9a48f1";
      case "gray":
        return "#ffffff";
    }
  }};
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
`;

export const PopNewCardCategoriesThemeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  background-color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ffe4c2";
      case "green":
        return "#b4fdd1";
      case "purple":
        return "#e9d4ff";
      case "gray":
        return "#94a6be";
    }
  }};

  color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ff6d00";
      case "green":
        return "#06b16e";
      case "purple":
        return "#9a48f1";
      case "gray":
        return "#ffffff";
    }
  }};
`;

export const PopNewCardCreateBtn = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  &:hover {
    background-color: #33399b;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const Calendar = styled(DayPicker)`
  --rdp-day-height: 25px;
  --rdp-day-width: 25px;
  --rdp-day_button-height: 25px;
  --rdp-day_button-width: 25px;
  --rdp-nav-height: 25px;
  --rdp-cell-size: 25px;
`;
