import css from "./index.module.css";

import Section from "@/common/Section/Section";
import Filters from "@/pages/Cases/Filters/Filters";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CasesListProps = SliceComponentProps<Content.CasesListSlice>;

const CasesList = ({ slice }: CasesListProps): JSX.Element => {
  const filters = [
    "Photoset",
    "Video",
    "Motion",
    "Montage",
    "Travel",
    "Family",
  ];

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      number="02"
      title="ВСІ КЕЙСИ"
      containerCN={css.container}
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          paragraph: ({ children }) => (
            <p className={css.heading}>{children}</p>
          ),
        }}
      />

      <Filters elements={filters} />
    </Section>
  );
};

export default CasesList;
