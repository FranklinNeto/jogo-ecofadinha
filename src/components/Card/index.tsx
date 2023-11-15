import "./styles.css";

export interface CardProps {
  id: string;
  flipped?: boolean;
  back: string;
  handleClick?: (id: string) => void;
}

export const Card = ({ id, flipped = false, back, handleClick }: CardProps) => {
  const cardContentClassNames = ["card__content"];
  flipped && cardContentClassNames.push("card__content--flipped ");

  const handleClickFn = (idCard: string) => {
    if (handleClick) {
      handleClick(idCard);
    }
  };

  return (
    <div className="card" onClick={() => handleClickFn(id)}>
      <div className={cardContentClassNames.join(" ")}>
        <div className="card__face card__face--front">?</div>
        <div className="card__face card__face--back">{back}</div>
      </div>
    </div>
  );
};
