"use client";

import css from "./HeroWord.module.css";

import { KeyTextField } from "@prismicio/client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

interface IProps {
  word: KeyTextField;
  className?: string;
}

const HeroWord: React.FC<IProps> = ({ word, className }) => {
  const ref = useRef(null);

  const getLetters = (): string[] => {
    return word ? word[0].text.split("") : [];
  };

  const getRandomDelay = () => {
    const randomNum = (Math.random() * (0.4 - 0.1) + 0.1).toFixed(2);
    return parseFloat(randomNum);
  };

  return (
    <>
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: getRandomDelay(), duration: 0.5 }}
      >
        {getLetters().map((l, index) => (
          <motion.span
            className={css.word}
            key={`${index}-${l}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: getRandomDelay(), duration: 1 }}
          >
            {l}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default HeroWord;
