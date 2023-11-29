import css from "./Section.module.css";

import clsx from "clsx";

interface IProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<IProps> = ({
  as: Comp = "section",
  className,
  children,
}) => {
  return (
    <Comp className={clsx(css.section, className)}>
      <div className={css.sectHeading}>
        <span className={css.sectLabel}>02/</span>
        <span className={css.sectLabel}>ОСТАННІ КЕЙСИ</span>
        <span className={css.sectLabel}>02</span>
      </div>
      <div className={css.container}>{children}</div>
    </Comp>
  );
};

export default Section;
