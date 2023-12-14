"use client";

import css from "./ServicesHeading.module.css";

import { Variants, motion, useInView, useSpring } from "framer-motion";
import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";
import { ServiceDocument } from "../../../../../prismicio-types";
import { useEffect, useState } from "react";

interface IProps {
  title: RichTextField;
  subtitle: RichTextField;
  services: (ServiceDocument<string> | undefined)[];
}

const ServicesHeading: React.FC<IProps> = ({ title, subtitle, services }) => {
  const listVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <PrismicRichText
        field={title}
        components={{
          heading2: ({ children }) => (
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
              className={css.title}
            >
              {children}
            </motion.h2>
          ),
        }}
      />
      <div className={css.progressLine}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{
            scaleX: 1,
            transition: {
              duration: 1.3,
              ease: "easeInOut",
              delay: 0.2,
            },
          }}
          viewport={{ once: true }}
          className={css.progressBar}
        ></motion.div>
      </div>
      <PrismicRichText
        field={subtitle}
        components={{
          paragraph: ({ children }) => (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
              className={css.subTitle}
            >
              {children}
            </motion.p>
          ),
        }}
      />
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={css.list}
      >
        {services.map((item) => (
          <motion.li
            variants={itemVariants}
            key={item?.uid}
            className={css.item}
          >
            <PrismicRichText
              field={item?.data.title}
              components={{
                heading3: ({ children }) => (
                  <h3 className={css.servTitle}>{children}</h3>
                ),
              }}
            />
            <div className={css.price}>
              <span className={css.priceLabel}>від</span>
              <PrismicRichText
                field={item?.data.price}
                components={{
                  paragraph: ({ children }) => (
                    <p className={css.priceValue}>{children} грн</p>
                  ),
                }}
              />
              <span className={css.priceLabel}>за 1 годину</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ServicesHeading;
