"use client";

import css from "./TeamItem.module.css";

import clsx from "clsx";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { MemberDocument } from "../../../../prismicio-types";
import { Variants, motion } from "framer-motion";
import { PrismicRichText } from "@prismicio/react";

interface IProps {
  item: MemberDocument<string> | undefined;
  className?: string;
  variation: string;
}

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

const TeamItem: React.FC<IProps> = ({ item, className, variation }) => {
  return (
    <motion.li
      variants={variants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className={clsx(css.itemWrap, className, variation === "extended" && css.extended)}
      key={item?.uid}
    >
      {variation === "default" && (
        <div className={css.wrap}>
          <div className={css.item}>
            {item?.data.image && (
              <PrismicNextImage
                field={item?.data.image}
                className={css.image}
              />
            )}
          </div>
        </div>
      )}
      {variation === "extended" && (
        <>
          <div className={css.wrap}>
            <div className={css.item}>
              {item?.data.image && (
                <PrismicNextImage
                  field={item?.data.image}
                  className={css.image}
                />
              )}
            </div>
          </div>
          <div className={css.info}>
            <PrismicRichText
              field={item?.data.name}
              components={{
                heading3: ({ children }) => (
                  <h3 className={css.name}>{children}</h3>
                ),
              }}
            />
            <PrismicRichText
              field={item?.data.description}
              components={{
                paragraph: ({ children }) => (
                  <p className={css.description}>{children}</p>
                ),
              }}
            />
            <ul className={css.socials}>
              {item?.data.socials.map((i, index) => (
                <li key={index} className={css.linkWrap}>
                  <PrismicNextLink field={i.link} className={css.socialLink}>
                    {i.network?.toString()}
                    <ArrowIcon className={css.icon} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </motion.li>
  );
};

export default TeamItem;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
    >
      <path d="M8.293 2.293a1 1 0 011.414 0l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414L11 8.5H1.5a1 1 0 010-2H11L8.293 3.707a1 1 0 010-1.414z"></path>
    </svg>
  );
}
