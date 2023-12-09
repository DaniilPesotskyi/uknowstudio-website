import Link from "next/link";
import Menu from "../Menu/Menu";
import css from "./Header.module.css";
import { createClient } from "@/prismicio";

const Header: React.FC = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link className={css.logoMobile} href="/">
          UK? s
        </Link>
        <Link className={css.logo} href="/">
          UKNOW? studio
        </Link>
        <Menu navItems={settings.data.navigation} />
        <button
          // onClick={() => {
          //   window.scrollTo({
          //     top: document.documentElement.scrollHeight,
          //     behavior: "smooth",
          //   });
          // }}
          className={css.callBtn}
        >{`Зв'яжіться з нами`}</button>
      </div>
    </header>
  );
};

export default Header;
