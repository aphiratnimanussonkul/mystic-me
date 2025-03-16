import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./index.css";

const cards = Array.from({ length: 52 }, (_, i) => `Card ${i + 1}`);

export const TarotCardPicker = () => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleCardClick = (card: string) => {
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const resetSelection = () => {
    setSelectedCards([]);
  };

  const cardAnimations = cards.map((_, index) =>
    useSpring({
      to: { transform: `rotate(${(index + 19.5) * 4}deg) translateY(-150px)` },
      config: { tension: 200, friction: 20 },
    })
  );

  return (
    <div className="container">
      <h1>Mystic Me</h1>
      <div className="card-arc">
        {cards.map((card, index) => (
          <animated.div
            key={`card-${card}`}
            className={`card ${selectedCards.includes(card) ? "selected" : ""}`}
            onClick={() => handleCardClick(card)}
            style={cardAnimations[index]}
          >
            <div className="card-back"></div>
          </animated.div>
        ))}
      </div>
      {selectedCards.length === 3 && (
        <div className="selected-cards">
          <h2>Your Selection:</h2>
          <p>{selectedCards.join(", ")}</p>
          <button onClick={resetSelection}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default TarotCardPicker;
