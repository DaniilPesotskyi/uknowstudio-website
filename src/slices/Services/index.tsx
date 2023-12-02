import css from "./index.module.css";

import Section from "@/components/common/Section/Section";

import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

const Services = async ({ slice }: ServicesProps): Promise<JSX.Element> => {
  const client = createClient();

  const services = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.service) && item.service.uid) {
        return client.getByUID("service", item.service.uid);
      }
    })
  );

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      title="ПОСЛУГИ"
      number="03"
    >
      <div>
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className={css.title}>{children}</h2>
            ),
          }}
        />
        <div className={css.progressLine}></div>
        <PrismicRichText
          field={slice.primary.subtitle}
          components={{
            paragraph: ({ children }) => (
              <p className={css.subTitle}>{children}</p>
            ),
          }}
        />
        <ul>
          {services.map((item) => (
            <li key={item?.uid}>
              <PrismicRichText
                field={item?.data.title}
                components={{
                  heading3: ({ children }) => <h3>{children}</h3>,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Services;
