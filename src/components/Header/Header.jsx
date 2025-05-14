import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
import * as S from "./styledComponents";
import { useTheme } from "../../providers/ThemesProvider";
import { useTask } from "../../providers/TaskProvider";

const Header = () => {
  const [showUserPopup, setShowUserPopup] = useState(false);
  const { setFilter, filter } = useTask();

  const showUserPopupHandler = () => {
    setShowUserPopup((prev) => !prev);
  };

  const { isDark } = useTheme();

  const selectHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <S.HeaderLink to="/">
              <S.HeaderLogoImg
                src={isDark ? "/logo_dark.png" : "/logo.png"}
                alt="logo"
              />
            </S.HeaderLink>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.CustomSelect
              defaultValue="1"
              onChange={selectHandler}
              value={filter}
            >
              <S.CustomSelectOption value="myTasks">
                Мои задачи
              </S.CustomSelectOption>
              <S.CustomSelectOption value="allTasks">
                Общие задачи
              </S.CustomSelectOption>
            </S.CustomSelect>
            <S.HeaderBtnMainNew>
              <S.HeaderBtnMainNewLink to="/newcard">
                Создать новую задачу
              </S.HeaderBtnMainNewLink>
            </S.HeaderBtnMainNew>
            <S.HeaderUserBtn
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => showUserPopupHandler()}
            >
              <S.UserImg
                src={isDark ? "/user_dark.png" : "/user.png"}
                alt="logo"
              />
            </S.HeaderUserBtn>
            {showUserPopup && (
              <PopUser
                showUserPopupHandler={showUserPopupHandler}
                closedFromPopUp
              />
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
