import styled from "styled-components";
import { Link } from "react-router-dom";
import { DayPicker } from "react-day-picker";

export const PopBrows = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  &:target {
    display: block;
  }
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 7;
  position: absolute;
  top: 0;
  left: 0;

  &.active {
    display: flex;
  }

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowsBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowserContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowsTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowsTtl = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  display: block;

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

  @media screen and (max-width: 495px) {
    display: none;
  }
`;

export const CategoriesThemeText = styled.p`
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

export const PopBroswStatus = styled.div`
  margin-bottom: 11px;
`;

export const PopBrowsStatusText = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: ${({ $current, theme }) =>
    $current ? theme.colors.statusColor : "#94a6be"};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;
  display: ${({ $hide }) => ($hide ? "none" : "block")};
  background-color: ${({ $current }) =>
    $current ? "rgba(148, 166, 190, 0.4)" : ""};
`;

export const StatusThemeText = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  }};
`;

export const PopBrowsWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowsForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const PopBrowsFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopBrowsFormLabel = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const TextArea = styled.textarea`
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
  height: 220px;
  &[readonly] {
    background-color: ${({ theme }) => theme.colors.background};
  }
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

export const PopNewBrowserCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
  transform: translate(0);
  @media screen and (max-width: 495px) {
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

export const ThemeDownCategory = styled.div`
  display: none;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const ThemeDownCategoryText = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopBrowsBtnBrowse = styled.div`
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  display: ${({ $hide }) => ($hide ? "none" : "flex")};
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const PopBrowsBtn = styled.button`
  display: ${({ $hide }) => ($hide ? "none" : "block")};
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  border-radius: 4px;
  border: 0.7px solid
    var(--palette-navy-60, ${({ theme }) => theme.colors.buttonColor});
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.buttonColor};
  &:hover {
    background-color: #33399b;
    border-color: #33399b;
    color: #ffffff;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
  }
`;

export const PopBrowsBtnBg = styled.button`
  display: ${({ $hide }) => ($hide ? "none" : "block")};
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
  }
`;

export const PopBrowsLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const Button = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ $primary }) => ($primary ? "#565eef" : "transparent")};
  border: ${({ $primary }) => ($primary ? "none" : "0.7px solid #565eef")};
  color: ${({ $primary }) => ($primary ? "#ffffff" : "#565eef")};

  &:hover {
    background: ${({ $primary }) =>
      $primary ? "#4049c9" : "${({ theme }) => theme.colors.background}"};
  }

  &:active {
    transform: scale(0.95);
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
