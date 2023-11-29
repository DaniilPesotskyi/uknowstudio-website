import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

export type HomepageHeroProps = SliceComponentProps<Content.HomepageHeroSlice>;

const HomepageHero = ({ slice }: HomepageHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={css.section}
    >
      <p className={clsx(css.decoLabel, css.firstLabel)}>01</p>
      <div className={css.heading}>
        <p className={clsx(css.title)}>ЗАКАРБУЙ</p>
        <p className={clsx(css.title)}>ІСТОРІЮ</p>
        <div className={css.fieldWithSec}>
          <p className={clsx(css.title)}>В</p>
          <p className={css.secondaryTitle}>
            Створюємо акцент на важливих деталях, цікавих моментах та сильних
            сторонах
          </p>
        </div>
        <p className={clsx(css.title)}>КАДРІ</p>
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

export default HomepageHero;

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
