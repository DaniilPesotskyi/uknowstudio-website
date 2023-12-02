import css from "./index.module.css";

import Section from "@/common/Section/Section";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TeamProps = SliceComponentProps<Content.TeamSlice>;

const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      title={"НАША КОМАНДА"}
      number={"03"}
      containerCN={css.container}
    >
      <PrismicRichText
        field={slice.primary.title}
        components={{
          heading2: ({ children }) => <h2 className={css.title}>{children}</h2>,
        }}
      />
      <PrismicRichText
        field={slice.primary.subtitle}
        components={{
          paragraph: ({ children }) => (
            <p className={css.subTitle}>{children}</p>
          ),
        }}
      />
    </Section>
  );
};

export default Team;
