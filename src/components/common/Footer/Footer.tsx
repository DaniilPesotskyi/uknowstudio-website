import { createClient } from "@/prismicio";
import css from "./Footer.module.css";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const Footer: React.FC = async () => {
  const client = createClient();
  const footer = await client.getSingle("footer");

  const year = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <a href="" className={css.contactForm}>
        <p className={css.contactEmail}>uknowstudio@gmail.com</p>
      </a>
      <div className={css.container}>
        <div className={css.logoWrap}>
          <a className={css.logoMobile} href="/">
            UK? s
          </a>
          <a className={css.logo} href="/">
            UKNOW? studio
          </a>
          <button className={css.menuBtn} type="button">
            <MenuIcon className={css.menuIcon} />
          </button>
        </div>
        <ul>
          {footer.data.socials.map((item, index) => (
            <li key={index}>
              <PrismicNextLink field={item.link}>
                {item.icon === "instagram" && "instagram"}
                {item.icon === "telegram" && "telegram"}
                {item.icon === "tiktok" && "tiktok"}
                {item.icon === "youtube" && "youtube"}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
        <PrismicRichText
          field={footer.data.copy_text}
          components={{
            paragraph: ({ children }) => (
              <p className={css.copy}>
                {year}.{children}
              </p>
            ),
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
    >
      <g clipPath="url(#a)">
        <path d="M26.667 24.167H3.334a.833.833 0 110-1.667h23.333a.833.833 0 010 1.667zm0-8.334H3.334a.833.833 0 110-1.666h23.333a.834.834 0 010 1.666zm0-8.333H3.334a.833.833 0 010-1.667h23.333a.833.833 0 010 1.667z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h30v30H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
