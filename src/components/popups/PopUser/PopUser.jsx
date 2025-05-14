import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import * as S from "./styledComponents";
import { useTheme } from "../../../providers/ThemesProvider";

const PopUser = ({ showUserPopupHandler }) => {
  const userWindowRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("userInfo")).user;
  const { isDark, toggleTheme } = useTheme();

  const handleClick = (event) => {
    if (
      userWindowRef.current &&
      !userWindowRef.current.contains(event.target)
    ) {
      showUserPopupHandler();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <S.HeaderPopUserSet ref={userWindowRef}>
      <S.PopUserSetName>{user.name}</S.PopUserSetName>
      <S.PopUserSetMail>{user.email}</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
        <S.PopUserSetThemeInput
          onChange={toggleTheme}
          type="checkbox"
          name="checkbox"
          checked={isDark}
        />
      </S.PopUserSetTheme>
      <S.PopUserSetBtn type="button">
        <S.PopUserSetBtnLink to="/exit">Выйти</S.PopUserSetBtnLink>
      </S.PopUserSetBtn>
    </S.HeaderPopUserSet>
  );
};

PopUser.propTypes = {
  showUserPopupHandler: PropTypes.func.isRequired,
};

export default PopUser;
