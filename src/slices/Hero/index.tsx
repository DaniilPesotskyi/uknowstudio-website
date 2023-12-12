import HeroWord from "@/components/common/HeroWord/HeroWord";
import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
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
        <HeroWord word={slice.primary.first_word} className={css.title} />
        <HeroWord word={slice.primary.second_word} className={css.title} />
        {slice.variation === "withSubtext" && (
          <>
            <div className={css.fieldWithSec}>
              <HeroWord word={slice.primary.third_word} className={css.title} />
              <PrismicRichText
                field={slice.primary.secondary_text}
                components={{
                  paragraph: ({ children }) => (
                    <p className={css.secondaryTitle}>{children}</p>
                  ),
                }}
              />
            </div>
            <HeroWord word={slice.primary.fourth_word} className={css.title} />
          </>
        )}
        {slice.variation === "default" && (
          <>
            <div className={css.fieldWithSec}>
              <HeroWord word={slice.primary.third_word} className={css.title} />
            </div>
            <HeroWord word={slice.primary.fourth_word} className={css.title} />
          </>
        )}
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
