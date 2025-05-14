import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
}

.rdp-months {
  height: 210px;
}

.rdp-caption_label {
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
}
.rdp-chevron {
  width: 18px;
  height: 25px;
  cursor: pointer;
  fill: #94A6BE;

}
.rdp-weekday {
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
}

.rdp-month_grid {
  max-height: 100%;
}
.rdp-day {
  border:none;
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  &:hover {
    background-color: #eaeef6;
    color: #94a6be !important;
  }
  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
}

.rdp-today {
  background-color: #eaeef6;
  color: #94a6be !important;
} 

.rdp-selected {
  background-color: #94a6be;
  color: #ffffff !important;
  border: none;
}

.rdp-day_button {
  border: none !important;
}

.rdp-footer {
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
}

  .date-control { 
    color: black;
  }
    
.rdp-caption_label {
  text-transform: capitalize;
}
`;
