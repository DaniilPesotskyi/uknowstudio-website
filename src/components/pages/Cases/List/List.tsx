"use client";

import { useState } from "react";
import css from "./List.module.css";

import clsx from "clsx";
import { CaseDocument } from "../../../../../prismicio-types";

interface IProps {
  elements: CaseDocument<string>[];
}

const List: React.FC<IProps> = ({ elements }) => {
  const [filters, setFilters] = useState<string[]>([]);

  const filtersList = [
    "Photoset",
    "Video",
    "Motion",
    "Montage",
    "Travel",
    "Family",
  ];

  const setAllFilters = () => {
    setFilters([]);
  };

  const onFilterClick = (i: string) => {
    if (filters.includes(i)) {
      setFilters(filters.filter((el) => i !== el));
      return;
    }

    setFilters([...filters, i]);
  };

  return (
    <div>
      <ul className={css.list}>
        <li
          className={clsx(
            css.item,
            filters.length === 0 && css.active,
            filters.length === filtersList.length && css.active
          )}
          onClick={setAllFilters}
        >
          All
        </li>
        {filtersList.map((el) => (
          <li
            className={clsx(css.item, filters.includes(el) && css.active)}
            key={el}
            onClick={() => onFilterClick(el)}
          >
            {el}
          </li>
        ))}
      </ul>
      <ul>
        {elements.map(({ data }, index) => (
          <li key={index}>CASE</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
