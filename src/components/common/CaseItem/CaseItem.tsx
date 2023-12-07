import css from "./CaseItem.module.css";

import { PrismicNextImage } from "@prismicio/next";
import { CaseDocument } from "../../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";

interface IProps {
  item: CaseDocument<string> | undefined;
}

const CaseItem: React.FC<IProps> = ({ item }) => {
  return (
    <li className={css.item}>
      <div className={css.overlay}>
        <PrismicRichText
          field={item?.data.title}
          components={{
            heading3: ({ children }) => (
              <h3 className={css.title}>{children}</h3>
            ),
          }}
        />
      </div>
      <PrismicNextImage field={item?.data.main_image} className={css.image} />
    </li>
  );
};

export default CaseItem;
