import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./index.css";

const MajorArcana = [
  "The Fool",
  "The Magician",
  "The High Priestess",
  "The Empress",
  "The Emperor",
  "The Hierophant",
  "The Lovers",
  "The Chariot",
  "Strength",
  "The Hermit",
  "Wheel of Fortune",
  "Justice",
  "The Hanged Man",
  "Death",
  "Temperance",
  "The Devil",
  "The Tower",
  "The Star",
  "The Moon",
  "The Sun",
  "Judgment",
  "The World",
];
const MinorArcanaCups = [
  "Ace of Cups",
  "Two of Cups",
  "Three of Cups",
  "Four of Cups",
  "Five of Cups",
  "Six of Cups",
  "Seven of Cups",
  "Eight of Cups",
  "Nine of Cups",
  "Ten of Cups",
  "Page of Cups",
  "Knight of Cups",
  "Queen of Cups",
  "King of Cups",
];
const MinorArcanaWands = [
  "Ace of Wands",
  "Two of Wands",
  "Three of Wands",
  "Four of Wands",
  "Five of Wands",
  "Six of Wands",
  "Seven of Wands",
  "Eight of Wands",
  "Nine of Wands",
  "Ten of Wands",
  "Page of Wands",
  "Knight of Wands",
  "Queen of Wands",
  "King of Wands",
];
const MinorArcanaSwords = [
  "Ace of Swords",
  "Two of Swords",
  "Three of Swords",
  "Four of Swords",
  "Five of Swords",
  "Six of Swords",
  "Seven of Swords",
  "Eight of Swords",
  "Nine of Swords",
  "Ten of Swords",
  "Page of Swords",
  "Knight of Swords",
  "Queen of Swords",
  "King of Swords",
];
const MinorArcanaPentacles = [
  "Ace of Pentacles",
  "Two of Pentacles",
  "Three of Pentacles",
  "Four of Pentacles",
  "Five of Pentacles",
  "Six of Pentacles",
  "Seven of Pentacles",
  "Eight of Pentacles",
  "Nine of Pentacles",
  "Ten of Pentacles",
  "Page of Pentacles",
  "Knight of Pentacles",
  "Queen of Pentacles",
  "King of Pentacles",
];

interface ICard {
  name: string;
  reversed: boolean;
}

export const TarotCardPicker = () => {
  const cards: string[] = [
    ...MajorArcana,
    ...MinorArcanaCups,
    ...MinorArcanaPentacles,
    ...MinorArcanaSwords,
    ...MinorArcanaWands,
  ];
  const [selectedCards, setSelectedCards] = useState<ICard[]>([]);
  const [shuffledCards, setShuffledCards] = useState<ICard[]>([]);

  useEffect(() => {
    setShuffledCards(shuffleCards(cards));
  }, []);

  const shuffleCards = (cards: string[]): ICard[] => {
    const shuffled: ICard[] = [...cards].map((e) => ({
      name: e,
      reversed: false,
    }));
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const reversed = Math.floor(Math.random() * 10) % 2 == 0;
      console.log(reversed);
      shuffled[i].reversed = reversed;
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleCardClick = (card: ICard) => {
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const resetSelection = () => {
    setSelectedCards([]);
  };

  const cardAnimations = cards.map((_, index) =>
    useSpring({
      to: { transform: `rotate(${(index + 21.25) * 3}deg) translateY(-300px)` },
      config: { tension: 200, friction: 20 },
    })
  );

  return (
    <div className="container">
      <h1>Mystic Me</h1>
      <div className="card-arc">
        {shuffledCards.map((card, index) => (
          <animated.div
            {...{
              key: `card-${card.name}`,
              className: `card ${
                selectedCards.includes(card) ? "selected" : ""
              }`,
              onClick: () => handleCardClick(card),
              style: cardAnimations[index],
            }}
          >
            <div className="card-back"></div>
          </animated.div>
        ))}
      </div>
      {selectedCards.length === 3 && (
        <div className="selected-cards">
          <h2>Your Selection:</h2>
          {selectedCards.map((card, index) => (
            <div key={index}>
              <p>
                {card.name}
                {card.reversed ? " (Reversed)" : ""}
              </p>
            </div>
          ))}
          <button onClick={resetSelection}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default TarotCardPicker;
