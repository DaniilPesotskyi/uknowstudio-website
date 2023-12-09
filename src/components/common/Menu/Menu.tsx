"use client";

import { useState } from "react";
import css from "./Menu.module.css";
import { PrismicNextLink } from "@prismicio/next";
import { GroupField } from "@prismicio/client";
import {
  SettingsDocumentDataNavigationItem,
  Simplify,
} from "../../../../prismicio-types";
import Link from "next/link";

interface IProps {
  navItems: GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

const Menu: React.FC<IProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className={css.backdrop}>
          <div className={css.container}>
            <button
              className={css.closeBtn}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CloseIcon className={css.closeIcon} />
            </button>
            <nav className={css.menuList}>
              {navItems.map((item, index) => (
                <PrismicNextLink
                  key={index}
                  field={item.link}
                  className={css.link}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {item.label}
                </PrismicNextLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;

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
