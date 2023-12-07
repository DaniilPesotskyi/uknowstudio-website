"use client";

import { useState } from "react";
import css from "./List.module.css";

import clsx from "clsx";
import { CaseDocument } from "@/../prismicio-types";
import { KeyTextField } from "@prismicio/client";
import CaseItem from "@/components/common/CaseItem/Caseitem";

interface IProps {
  elements: CaseDocument<string>[];
}

const List: React.FC<IProps> = ({ elements }) => {
  const [filters, setFilters] = useState<KeyTextField[]>([]);

  const getFilters = (): any[] => {
    let filterSet = new Set();

    elements.forEach((el) => {
      el.data.tags.forEach((tag) => {
        filterSet.add(tag.tag);
      });
    });

    return Array.from(filterSet);
  };

  const onFilterClick = (i: string) => {
    if (filters.includes(i)) {
      setFilters(filters.filter((el) => i !== el));
      return;
    }

    setFilters([...filters, i]);
  };

  const getFilteredContacts = () => {
    let filteredContacts: any[] = [];

    elements.forEach((el) => {
      if (el.data.tags.some((tag) => filters.includes(tag.tag))) {
        filteredContacts.push(el);
      }
    });

    return filteredContacts;
  };
  const contactsToRender =
    getFilteredContacts().length === 0 ? elements : getFilteredContacts();

  return (
    <>
      <ul className={css.filtersList}>
        <li
          className={clsx(
            css.item,
            filters.length === 0 && css.active,
            filters.length === getFilters().length && css.active
          )}
          onClick={() => setFilters([])}
        >
          All
        </li>
        {getFilters().map((el) => (
          <li
            className={clsx(css.item, filters.includes(el) && css.active)}
            key={el}
            onClick={() => onFilterClick(el)}
          >
            {el}
          </li>
        ))}
      </ul>
      <ul className={css.casesList}>
        {contactsToRender.map((el, index) => (
          <CaseItem key={index} item={el} />
        ))}
      </ul>
    </>
  );
};

export default List;
