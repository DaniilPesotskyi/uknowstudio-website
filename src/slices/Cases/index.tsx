import css from "./index.module.css";

import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Section from "@/common/Section/Section";
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import CasesList from "@/components/common/CasesList/CasesList";

export type CasesProps = SliceComponentProps<Content.CasesSlice>;

const Cases = async ({ slice }: CasesProps): Promise<JSX.Element> => {
  const client = createClient();

  const cases = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.case) && item.case.uid) {
        return client.getByUID("case", item.case.uid);
      }
    })
  );

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      title={"ОСТАННІ КЕЙСИ"}
      number={"02"}
    >
      <div className={css.container}>
        <div className={css.heading}>
          <PrismicRichText
            field={slice.primary.label}
            components={{
              paragraph: ({ children }) => (
                <p className={css.title}>{children}</p>
              ),
            }}
          />
          <PrismicNextLink
            field={slice.primary.button_link}
            className={css.link}
          >
            {slice.primary.button_label}
          </PrismicNextLink>
        </div>
      </div>
      <div className={css.cases}>
        <CasesList items={cases} />
        <div className={css.backdrop}></div>
      </div>
    </Section>
  );
};

export default Cases;
