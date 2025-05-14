import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./styledComponents";

const SkeletonCard = () => {
  return (
    <S.CardsItem>
      <S.Card>
        <S.CardGroup>
          <S.CardTheme>
            <Skeleton width={82} height={20} borderRadius={18} />
          </S.CardTheme>
          <S.CardLink>
            <Skeleton circle width={18} height={4} />
          </S.CardLink>
        </S.CardGroup>
        <S.CardContent>
          <S.CardContentLink>
            <Skeleton width={113} height={13} />
          </S.CardContentLink>
          <S.CardDate>
            <Skeleton width={58} height={13} />
          </S.CardDate>
        </S.CardContent>
      </S.Card>
    </S.CardsItem>
  );
};

export default SkeletonCard;
