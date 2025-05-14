import * as S from "./styledComponents";

const NotFound = () => {
  return (
    <>
      <S.H1>404</S.H1>
      <S.P>Oops, This Page Not Found!</S.P>
      <S.FlexBox>
        <S.GoHomeLink to="/">To the home page</S.GoHomeLink>
      </S.FlexBox>
    </>
  );
};

export default NotFound;
