"use client";

import css from "./page.module.css";

import { useParams } from "next/navigation";

const CasePage: React.FC = () => {
  const params = useParams();

  return (
    <section className={css.section}>
      <div className={css.contaner}>
        <h1 className={css.title}>Ця сторінка в розробці!</h1>
        <p className={css.subtitle}>
          Сторінка кейса з uid:{" "}
          <span className={css.selection}>{params.uid}</span>
        </p>
      </div>
    </section>
  );
};

export default CasePage;
