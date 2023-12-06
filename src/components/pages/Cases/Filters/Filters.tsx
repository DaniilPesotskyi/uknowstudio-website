"use client";

import css from "./Filters.module.css";

import clsx from "clsx";

interface IProps {
  elements: string[];
}

const Filters: React.FC<IProps> = ({ elements }) => {
  return (
    <div>
      <ul className={css.list}>
        <li className={clsx(css.item, css.active)}>All</li>
        {elements.map((el) => (
          <li className={clsx(css.item)} key={el}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
