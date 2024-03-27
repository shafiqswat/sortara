/** @format */

import style from "../../style/footer.module.css";

interface FooterProps {
  linkColor: string;
}

export default function Footer({ linkColor }: FooterProps) {
  const linkStyle = {
    color: linkColor,
  };

  return (
    <ul className={style.menu}>
      <li>
        <a
          href='#'
          style={linkStyle}>
          Sortara
        </a>
      </li>
      <li>
        <a
          href='#'
          style={linkStyle}>
          About
        </a>
      </li>
      <li>
        <a
          href='#'
          style={linkStyle}>
          Blog
        </a>
      </li>
      <li>
        <a
          href='#'
          style={linkStyle}>
          Legalities and Privacy Commitments
        </a>
      </li>
      <li>
        <a
          href='#'
          style={linkStyle}>
          FAQ
        </a>
      </li>
      <li>
        <a
          href='#'
          style={linkStyle}>
          Contact
        </a>
      </li>
    </ul>
  );
}
