import { createClient } from "@/prismicio";
import css from "./Footer.module.css";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import Menu from "../Menu/Menu";

const Footer: React.FC = async () => {
  const client = createClient();

  const footer = await client.getSingle("footer");
  const settings = await client.getSingle("settings");

  const year = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <a href="mailto:uknowstudio@gmail.com" className={css.contactForm}>
        <p className={css.contactEmail}>uknowstudio@gmail.com</p>
        <MailIcon className={css.mailIcon} />
      </a>
      <div className={css.container}>
        <div className={css.logoWrap}>
          <Link className={css.logoMobile} href="/">
            UK? s
          </Link>
          <Link className={css.logo} href="/">
            UKNOW? studio
          </Link>
          <Menu navItems={settings.data.navigation} />
        </div>
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
        <ul className={css.socList}>
          {footer.data.socials.map((item, index) => (
            <li key={index} className={css.socItem}>
              <PrismicNextLink field={item.link} className={css.socLink}>
                {item.icon === "instagram" && (
                  <InstagramIcon className={css.icon} />
                )}
                {item.icon === "telegram" && (
                  <TelegramIcon className={css.icon} />
                )}
                {item.icon === "tiktok" && <TikTokIcon className={css.icon} />}
                {item.icon === "youtube" && (
                  <YoutubeIcon className={css.icon} />
                )}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      // fill="none"
      viewBox="0 0 50 50"
    >
      <g clipPath="url(#clip0_168_152)">
        <rect width="50" height="50" fill="#4B4B4B" rx="25"></rect>
        <path
          // fill="#fff"
          d="M37.47 17.817a6.567 6.567 0 01-6.566-6.567h-4.692v18.372a3.99 3.99 0 11-2.863-3.832v-4.56a8.469 8.469 0 107.336 8.392l.137-9.287a11.208 11.208 0 006.649 2.173v-4.691z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_168_152">
          <path fill="#fff" d="M0 0H50V50H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      // fill="none"
    >
      <rect width="50" height="50" fill="#4B4B4B" rx="25"></rect>
      <path
        // fill="#fff"
        d="M25 14.759h5.12c1.205 0 1.808.301 2.26.452.602.301 1.054.452 1.505.903.452.452.754.904.904 1.506.15.452.301 1.055.452 2.26v10.24c0 1.205-.301 1.808-.452 2.26-.301.602-.452 1.054-.904 1.505-.451.452-.903.754-1.505.904-.452.15-1.055.301-2.26.452H19.88c-1.205 0-1.808-.301-2.26-.452-.602-.301-1.054-.452-1.506-.904-.451-.451-.753-.903-.903-1.505-.15-.452-.301-1.055-.452-2.26V19.88c0-1.205.301-1.808.452-2.26.301-.602.452-1.054.903-1.506.452-.451.904-.753 1.506-.903.452-.15 1.055-.301 2.26-.452H25zm0-2.259h-5.12c-1.356 0-2.26.301-3.012.602a6.576 6.576 0 00-2.26 1.506c-.753.753-1.054 1.356-1.506 2.26-.3.753-.451 1.656-.602 3.012v10.24c0 1.356.301 2.26.602 3.012a6.576 6.576 0 001.506 2.26c.753.753 1.356 1.054 2.26 1.506.753.3 1.656.451 3.012.602h10.24c1.356 0 2.26-.301 3.012-.602a6.576 6.576 0 002.26-1.506c.753-.753 1.054-1.356 1.506-2.26.3-.752.451-1.656.602-3.011V19.88c0-1.356-.301-2.26-.602-3.012a6.576 6.576 0 00-1.506-2.26c-.753-.753-1.356-1.054-2.26-1.506-.752-.3-1.656-.451-3.011-.602H25z"
      ></path>
      <path
        // fill="#fff"
        d="M25 18.524A6.428 6.428 0 0018.524 25 6.428 6.428 0 0025 31.476 6.428 6.428 0 0031.476 25 6.428 6.428 0 0025 18.524zm0 10.693c-2.259 0-4.217-1.807-4.217-4.217 0-2.259 1.807-4.217 4.217-4.217 2.259 0 4.217 1.807 4.217 4.217 0 2.259-1.958 4.217-4.217 4.217zm6.627-9.337a1.506 1.506 0 100-3.012 1.506 1.506 0 000 3.012z"
      ></path>
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      // fill="none"
    >
      <rect width="50" height="50" fill="#4B4B4B" rx="25"></rect>
      <path
        // fill="#fff"
        d="M35 15.753l-3.757 19.612s-.525 1.36-1.97.708l-8.667-6.882-.04-.02a6003.79 6003.79 0 0010.646-9.926c.615-.593.233-.947-.48-.498l-13.411 8.82-5.174-1.803s-.814-.3-.893-.953c-.079-.653.92-1.006.92-1.006l21.092-8.569S35 14.447 35 15.753z"
      ></path>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      // fill="none"
    >
      <rect width="50" height="50" fill="#4B4B4B" rx="25"></rect>
      <path
        // fill="#fff"
        fillRule="evenodd"
        d="M14.078 33.821a3.21 3.21 0 01-1.304-.752 3.109 3.109 0 01-.803-1.255c-.917-2.455-1.19-12.705.578-14.729a3.428 3.428 0 012.31-1.128c4.741-.497 19.388-.431 21.07.166.473.15.905.402 1.264.738.36.337.636.747.809 1.203 1.002 2.538 1.036 11.76-.136 14.198a3.173 3.173 0 01-1.478 1.46c-1.767.862-19.965.845-22.31.099zm7.527-4.81l8.496-4.313-8.496-4.345v8.658z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="98"
      height="98"
      fill="none"
    >
      <path d="M18.845 77.583c-1.879 0-3.447-.629-4.704-1.886-1.26-1.26-1.891-2.83-1.891-4.708V27.01c0-1.878.63-3.446 1.89-4.704 1.258-1.26 2.826-1.89 4.705-1.89h60.31c1.879 0 3.447.63 4.704 1.89 1.26 1.258 1.891 2.826 1.891 4.704v43.98c0 1.878-.629 3.446-1.886 4.704-1.26 1.26-2.83 1.89-4.709 1.89h-60.31zM49 49.47L16.333 28.114v42.875c0 .732.236 1.334.707 1.804.47.471 1.072.707 1.805.707h60.31c.733 0 1.334-.236 1.805-.707.471-.47.707-1.072.707-1.804V28.114L49 49.469zm0-4.553L80.409 24.5H17.591L49 44.916zM16.333 28.114V24.5v46.489c0 .732.236 1.334.707 1.804.47.471 1.072.707 1.805.707h-2.512V28.114z"></path>
    </svg>
  );
}
