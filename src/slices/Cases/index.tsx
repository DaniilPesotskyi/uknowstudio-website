import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Section from "@/common/Section/Section";

export type CasesProps = SliceComponentProps<Content.CasesSlice>;

const Cases = ({ slice }: CasesProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      title={"ОСТАННІ КЕЙСИ"}
      number={"02"}
    >
      <div></div>
    </Section>
  );
};

export default Cases;
