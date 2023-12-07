import { PrismicNextImage } from "@prismicio/next";
import css from "./CaseItem.module.css";
import { CaseDocument } from "../../../../prismicio-types";

interface IProps {
  item: CaseDocument<string> | undefined;
}

const CaseItem: React.FC<IProps> = ({ item }) => {
  return (
    <li className={css.item}>
      <PrismicNextImage field={item?.data.main_image} className={css.image} />
    </li>
  );
};

export default CaseItem;
