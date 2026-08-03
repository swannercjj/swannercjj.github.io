import { useState, useEffect, useCallback, useRef } from "react";
import { FaBriefcase } from "react-icons/fa";
// import { FaRegImage } from "react-icons/fa";
import { GiBallerinaShoes } from "react-icons/gi";
import styles from "./CardDeck.module.css";
import profileImg from "../../assets/intro/IMG_20260716_000845_Original.jpg";
import danceImg from "../../assets/intro/dance.png";

// Riftbound-style collectible cards. Swap `image` in for each once the real
// photos are added; the art window falls back to `color` while image is null.
const initialCards = [
  {
    id: 1,
    image: profileImg,
    label: "Image 1",
    color: "var(--color-card-bg)",
    name: "Jessica Chen",
    type: "Software Engineer",
    flavor: "Machine learning, game development.",
    icon: <FaBriefcase />,
    power: "∞",
  },
  {
    id: 2,
    image: danceImg,
    bgPosition: "50% 100%",
    label: "Image 2",
    color: "var(--palette-yellow)",
    name: "Image 2",
    type: "Dancer",
    flavor: "Classical Chinese, street dance.",
    icon: <GiBallerinaShoes />,
    power: "—",
  },
  // {
  //   id: 3,
  //   image: null,
  //   label: "Image 3",
  //   color: "var(--palette-taupe)",
  //   name: "Image 3",
  //   type: "Placeholder",
  //   flavor: "Add your image here.",
  //   icon: <FaRegImage />,
  //   power: "—",
  // },
];

// must clear the swap animation before another can start
const SWAP_MS = 700;
const AUTO_MS = 7000;

export const CardDeck = () => {
  const [cards, setCards] = useState(initialCards);
  const lockRef = useRef(false);
  const intervalRef = useRef(null);

  // send the front card to the back of the deck, ignoring calls that land
  // mid-animation so two cards never shuffle at once
  const advance = useCallback(() => {
    if (lockRef.current) return;
    lockRef.current = true;
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
    setTimeout(() => {
      lockRef.current = false;
    }, SWAP_MS);
  }, []);

  const startAuto = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, AUTO_MS);
  }, [advance]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, [startAuto]);

  // manual swap: advance, then restart the countdown so it doesn't
  // auto-swap again immediately after
  const handleInteract = () => {
    advance();
    startAuto();
  };

  return (
    <div
      className={styles.deck}
      onClick={handleInteract}
      role="button"
      tabIndex={0}
      aria-label="Show next image"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleInteract();
        }
      }}
    >
      {cards.map((card, i) => (
        <div
          key={card.id}
          className={styles.card}
          style={{
            zIndex: cards.length - i,
            transform: `translate(${i * 12}px, ${i * 12}px) rotate(${i * 3}deg)`,
          }}
        >
          <div
            className={styles.cardInner}
            style={{
              backgroundColor: card.image ? undefined : card.color,
              backgroundImage: card.image ? `url(${card.image})` : undefined,
              backgroundSize: card.image ? card.bgSize || "cover" : undefined,
              backgroundPosition: card.bgPosition || "center",
            }}
          >
            <span className={styles.cost}>{card.icon}</span>

            <div className={styles.overlay}>
              <div className={styles.typeLine}>{card.type}</div>
              <p className={styles.flavor}>{card.flavor}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
