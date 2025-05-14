import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import * as S from "./styledComponents";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <S.Wrapper>
      <Outlet />
      <Header />
      <Main />
    </S.Wrapper>
  );
};

export default MainPage;
