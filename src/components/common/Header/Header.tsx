import css from "./Header.module.css";

const Header: React.FC = async () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <a className={css.logoMobile} href="/">
          UK? s
        </a>
        <a className={css.logo} href="/">
          UKNOW? studio
        </a>
        <button className={css.menuBtn} type="button">
          <MenuIcon className={css.menuIcon} />
        </button>
        <a className={css.callBtn} href="/">{`Зв'яжіться з нами`}</a>
      </div>
    </header>
  );
};

export default Header;

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
