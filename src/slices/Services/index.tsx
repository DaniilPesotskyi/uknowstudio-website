import css from "./index.module.css";

import ServicesHeading from "@/pages/Homepage/ServicesHeading/ServicesHeading";
import Section from "@/common/Section/Section";

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
      number="04"
      containerCN={css.container}
    >
      <ServicesHeading
        title={slice.primary.title}
        subtitle={slice.primary.subtitle}
        services={services}
      />
    </Section>
  );
};

export default Services;
