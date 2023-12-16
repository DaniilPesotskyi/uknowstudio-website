"use client";

import css from "./CaseItem.module.css";

import { PrismicNextImage } from "@prismicio/next";
import { CaseDocument } from "../../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

interface IProps {
  item: CaseDocument<string> | undefined;
}

const CaseItem: React.FC<IProps> = ({ item }) => {
  return (
    <li className={css.item}>
      <Link href={`/cases/${item?.uid}`}>
        <div className={css.overlay}>
          <PrismicRichText
            field={item?.data.title}
            components={{
              heading3: ({ children }) => (
                <h3 className={css.title}>{children}</h3>
              ),
            }}
          />
          <PrismicRichText
            field={item?.data.short_description}
            components={{
              paragraph: ({ children }) => (
                <p className={css.description}>{children}</p>
              ),
            }}
          />
        </div>
        <PrismicNextImage field={item?.data.main_image} className={css.image} />
        <LinkIcon className={css.icon} />
      </Link>
    </li>
  );
};

export default CaseItem;

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.5 10.5L21 3m0 0h-5m5 0v5m0 6v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5"
      ></path>
    </svg>
  );
}
