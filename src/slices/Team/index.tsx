import TeamItem from "@/components/common/TeamItem/TeamItem";
import css from "./index.module.css";

import Section from "@/common/Section/Section";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TeamProps = SliceComponentProps<Content.TeamSlice>;

const Team = async ({ slice }: TeamProps): Promise<JSX.Element> => {
  const client = createClient();

  const members = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.member) && item.member.uid) {
        return client.getByUID("member", item.member.uid);
      }
    })
  );

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      title={"НАША КОМАНДА"}
      number={"03"}
      containerCN={css.container}
    >
      {slice.variation === "default" && (
        <>
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2 className={css.title}>{children}</h2>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.subtitle}
            components={{
              paragraph: ({ children }) => (
                <p className={css.subTitle}>{children}</p>
              ),
            }}
          />
          <ul className={css.list}>
            {members.map((item) => (
              <TeamItem
                key={item?.uid}
                item={item}
                className={css.itemWrap}
                variation={slice.variation}
              />
            ))}
          </ul>
        </>
      )}
      {slice.variation === "extended" && (
        <>
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2 className={css.title}>{children}</h2>
              ),
            }}
          />
          <ul className={css.listExtended}>
            {members.map((item) => (
              <TeamItem
                key={item?.uid}
                item={item}
                className={css.itemWrap}
                variation={slice.variation}
              />
            ))}
          </ul>
        </>
      )}
    </Section>
  );
};

export default Team;
