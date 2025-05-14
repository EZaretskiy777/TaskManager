import PropTypes from "prop-types";
import * as S from "./styledComponents";
import { useDroppable } from "@dnd-kit/core";

const Column = ({ title, children }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: title,
  });

  return (
    <S.Column ref={setNodeRef} $isOver={isOver}>
      <S.ColumnTitle>
        <S.ColumnTitleText>{title}</S.ColumnTitleText>
      </S.ColumnTitle>
      <S.ColumnContent>
        <S.Cards>{children}</S.Cards>
      </S.ColumnContent>
    </S.Column>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
};

export default Column;
