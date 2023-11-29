import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Cases`.
 */
export type CasesProps = SliceComponentProps<Content.CasesSlice>;

/**
 * Component for "Cases" Slices.
 */
const Cases = ({ slice }: CasesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cases (variation: {slice.variation}) Slices
    </section>
  );
};

export default Cases;
