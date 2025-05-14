import styled from "styled-components";
import { Link } from "react-router-dom";

export const H1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -1.2px;
  text-align: center;
  margin-top: 100px;
`;

export const P = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.72px;
  text-align: center;
  color: gray;
  margin-bottom: 10px;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const GoHomeLink = styled(Link)`
  width: fit-content;
  padding: 10px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    background-color: #33399b;
  }
`;
