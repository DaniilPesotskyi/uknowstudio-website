"use client";

import React, { useState } from "react";
import css from "./Menu.module.css";
import { PrismicNextLink } from "@prismicio/next";
import { GroupField } from "@prismicio/client";
import {
  SettingsDocumentDataNavigationItem,
  Simplify,
} from "../../../../prismicio-types";
import { Variants, motion } from "framer-motion";

interface IProps {
  navItems: GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

const Menu: React.FC<IProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const backdropVariants: Variants = {
    open: {
      opacity: 1,
    },
    closed: { opacity: 0 },
  };

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <>
      <button
        className={css.menuBtn}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon className={css.menuIcon} />
      </button>
      {isOpen && (
        <motion.div
          className={css.backdrop}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={backdropVariants}
        >
          <div className={css.container}>
            <button
              className={css.closeBtn}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CloseIcon className={css.closeIcon} />
            </button>
            <motion.nav
              className={css.menuList}
              variants={{
                open: {
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.3,
                  },
                },
                closed: {},
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={css.link}
                  variants={itemVariants}
                >
                  <PrismicNextLink
                    field={item.link}
                    onClick={(e) => setIsOpen(!isOpen)}
                  >
                    {item.label}
                  </PrismicNextLink>
                </motion.div>
              ))}
            </motion.nav>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default React.memo(Menu);

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
    >
      <g clipPath="url(#a)">
        <path d="M26.667 24.167H3.334a.833.833 0 110-1.667h23.333a.833.833 0 010 1.667zm0-8.334H3.334a.833.833 0 110-1.666h23.333a.834.834 0 010 1.666zm0-8.333H3.334a.833.833 0 010-1.667h23.333a.833.833 0 010 1.667z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h30v30H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
    >
      <path d="M20 57.212L17.788 55l17.5-17.5-17.5-17.5L20 17.787l17.5 17.5 17.5-17.5L57.212 20l-17.5 17.5 17.5 17.5L55 57.212l-17.5-17.5-17.5 17.5z"></path>
    </svg>
  );
}
