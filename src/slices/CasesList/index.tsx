import css from "./index.module.css";

import Section from "@/common/Section/Section";
import List from "@/pages/Cases/List/List";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CasesListProps = SliceComponentProps<Content.CasesListSlice>;

const CasesList = async ({ slice }: CasesListProps): Promise<JSX.Element> => {
  const client = createClient();

  const cases = await client.getAllByType("case");

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      number="02"
      title="ВСІ КЕЙСИ"
      containerCN={css.container}
    >
      <div className={css.headingContainer}>
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            paragraph: ({ children }) => (
              <p className={css.heading}>{children}</p>
            ),
          }}
        />
      </div>

      <List elements={cases} />
    </Section>
  );
};

export default CasesList;
