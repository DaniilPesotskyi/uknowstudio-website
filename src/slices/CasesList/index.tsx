import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CasesList`.
 */
export type CasesListProps = SliceComponentProps<Content.CasesListSlice>;

/**
 * Component for "CasesList" Slices.
 */
const CasesList = ({ slice }: CasesListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cases_list (variation: {slice.variation}) Slices
    </section>
  );
};

export default CasesList;
