import PropTypes from "prop-types";
import * as S from "./styledComponents";
import { color } from "../../services/utils/color";
import moment from "moment";
import { useDraggable } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";

const Card = ({ theme, id, title, date }) => {
  const navigate = useNavigate();
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    position: isDragging ? "relative" : "static",
    zIndex: isDragging ? 999 : 1,
    opacity: isDragging ? 0.8 : 1,
    transition: "box-shadow 0.2s ease",
    boxShadow: isDragging ? "0 0 10px rgba(0,0,0,0.2)" : "none",
  };

  const cardInfoHandler = () => {
    navigate(`/card/${id}`);
  };

  return (
    <S.CardsItem ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <S.Card>
        <S.CardGroup>
          <S.CardTheme $color={color(theme)}>
            <S.CardThemeText $color={color(theme)}>{theme}</S.CardThemeText>
          </S.CardTheme>
          <S.CardLink
            onClick={cardInfoHandler}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <S.CardBtn>
              <S.CardBtnBlock />
              <S.CardBtnBlock />
              <S.CardBtnBlock />
            </S.CardBtn>
          </S.CardLink>
        </S.CardGroup>
        <S.CardContent>
          <S.CardContentLink>
            <S.CardTitle>{title}</S.CardTitle>
          </S.CardContentLink>
          <S.CardDate>
            <S.CardDateIcon
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <S.CardDateG clipPath="url(#clip0_1_415)">
                <S.CardDatePath
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <S.CardDatePath
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </S.CardDateG>
              <S.CardDateDefs>
                <S.CardDateClipPath id="clip0_1_415">
                  <S.CardDateRect width="13" height="13" fill="white" />
                </S.CardDateClipPath>
              </S.CardDateDefs>
            </S.CardDateIcon>
            <S.CardDateText>{moment(date).format("DD.MM.YYYY")}</S.CardDateText>
          </S.CardDate>
        </S.CardContent>
      </S.Card>
    </S.CardsItem>
  );
};

Card.propTypes = {
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
