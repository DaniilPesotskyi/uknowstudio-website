"use client";

import css from "./TeamItem.module.css";

import clsx from "clsx";
import { PrismicNextImage } from "@prismicio/next";
import { MemberDocument } from "../../../../prismicio-types";
import { Variants, motion } from "framer-motion";

interface IProps {
  item: MemberDocument<string> | undefined;
  className?: string;
}

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  },
};

const TeamItem: React.FC<IProps> = ({ item, className }) => {
  return (
    <motion.li
      variants={variants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className={clsx(css.itemWrap, className)}
      key={item?.uid}
    >
      <div className={css.item}>
        {item?.data.image && (
          <PrismicNextImage field={item?.data.image} className={css.image} />
        )}
      </div>
    </motion.li>
  );
};

export default TeamItem;
