import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

export type CasesHeroProps = SliceComponentProps<Content.CasesHeroSlice>;

const CasesHero = ({ slice }: CasesHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={css.section}
    >
      <p className={clsx(css.decoLabel, css.firstLabel)}>01</p>
      <div className={css.heading}>
        <p className={clsx(css.title)}>МИ</p>
        <p className={clsx(css.title)}>ПИШАЄМОСЬ</p>
        <p className={clsx(css.title)}>СВОЄЮ</p>
        <p className={clsx(css.title)}>РОБОТОЮ</p>
      </div>
      <div className={css.scrollWrap}>
        <span className={clsx(css.decoLabel)}>SCROLL</span>
        <button type="button" className={css.scrollBtn}>
          <ScrollIcon className={css.scrollIcon} />
        </button>
        <span className={clsx(css.decoLabel)}>SCROLL</span>
      </div>
    </section>
  );
};

export default CasesHero;

function ScrollIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
    >
      <path strokeLinecap="square" strokeWidth="2" d="M28 10L15 24 2 10"></path>
    </svg>
  );
}
