import css from "./index.module.css";

import Section from "@/common/Section/Section";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type ParagraphProps = SliceComponentProps<Content.ParagraphSlice>;

const Paragraph = ({ slice }: ParagraphProps): JSX.Element => {
  return (
    <Section
      number="02"
      title="Загальна інформація"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      containerCN={css.container}
    >
      <PrismicRichText
        field={slice.primary.title}
        components={{
          heading2: ({ children }) => <h2 className={css.title}>{children}</h2>,
        }}
      />
      <div className={css.mainWrap}>
        <div className={css.textWrapper}>
          <PrismicRichText
            field={slice.primary.subtitle}
            components={{
              heading3: ({ children }) => (
                <h3 className={css.title}>{children}</h3>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.first_text_field}
            components={{
              paragraph: ({ children }) => (
                <p className={css.title}>{children}</p>
              ),
            }}
          />
        </div>
        <div className={css.imageWrapper}>
          <PrismicNextImage
            className={css.image}
            field={slice.primary.first_image}
          />
        </div>
      </div>
      <PrismicRichText
        field={slice.primary.first_text_field}
        components={{
          paragraph: ({ children }) => <p className={css.title}>{children}</p>,
        }}
      />
    </Section>
  );
};

export default Paragraph;
