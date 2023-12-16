import css from "./index.module.css";

import Section from "@/common/Section/Section";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

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
                <h3 className={css.subTitle}>{children}</h3>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.first_text_field}
            components={{
              paragraph: ({ children }) => (
                <p className={css.text}>{children}</p>
              ),
            }}
          />
        </div>
        <div className={css.imageWrapper}>
          <PrismicNextImage
            className={css.mainImage}
            field={slice.primary.first_image}
          />
        </div>
      </div>
      <PrismicRichText
        field={slice.primary.first_text_field}
        components={{
          paragraph: ({ children }) => (
            <p className={clsx(css.text, css.textMb)}>{children}</p>
          ),
        }}
      />
      <div className={clsx(css.imageWrapper, css.iwg)}>
        {slice.items.map((i, index) => (
          <PrismicNextImage
            key={index}
            className={css.mainImage}
            field={i.secondary_images}
          />
        ))}
      </div>
    </Section>
  );
};

export default Paragraph;
