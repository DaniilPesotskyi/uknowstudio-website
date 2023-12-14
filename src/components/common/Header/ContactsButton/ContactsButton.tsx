"use client";

import css from "./ContactsButton.module.css";

const ContactsButton = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }}
      className={css.callBtn}
    >{`Зв'яжіться з нами`}</button>
  );
};

export default ContactsButton;
