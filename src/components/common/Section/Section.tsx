import css from "./Section.module.css";

import clsx from "clsx";

interface IProps {
  as?: React.ElementType;
  number: string;
  title: string;
  className?: string;
  containerCN?: string;
  children: React.ReactNode;
}

const Section: React.FC<IProps> = ({
  as: Comp = "section",
  className,
  children,
  containerCN,
  number,
  title,
}) => {
  return (
    <Comp className={clsx(css.section, className)}>
      <div className={css.sectHeading}>
        <span className={css.sectLabel}>{number}/</span>
        <span className={css.sectLabel}>{title}</span>
        <span className={css.sectLabel}>{number}/</span>
      </div>
      <div className={clsx(containerCN)}>{children}</div>
    </Comp>
  );
};

export default Section;
