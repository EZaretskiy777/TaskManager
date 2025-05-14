import styled from "styled-components";

export const Column = styled.div`
  z-index: 0;
  heigth: 100%;
  width: 20%;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
  border: 2px dashed ${({ $isOver }) => ($isOver ? "#72c394" : "transparent")};
  background-color: ${({ $isOver }) =>
    $isOver ? "rgba(114, 195, 148, 0.05)" : "transparent"};
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`;

export const ColumnTitleText = styled.p`
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

export const ColumnContent = styled.div``;

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
    overflow-x: auto;
  }
`;
