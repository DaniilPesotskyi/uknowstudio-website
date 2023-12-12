"use client";

import css from "./CasesList.module.css";

import { CaseDocument } from "../../../../prismicio-types";
import { Variants, motion } from "framer-motion";
import CaseItem from "../CaseItem/CaseItem";

interface IProps {
  items: CaseDocument<string>[] | (CaseDocument<string> | undefined)[];
}

const listVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const CasesList: React.FC<IProps> = ({ items }) => {
  return (
    <>
      <motion.ul
        className={css.list}
        variants={listVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        {items.map((item, index) => (
          <CaseItem key={index} item={item} />
        ))}
      </motion.ul>
    </>
  );
};

export default CasesList;
