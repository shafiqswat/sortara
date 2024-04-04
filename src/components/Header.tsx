/** @format */
"use client";
// components/Header.tsx
import { Container, Nav, Navbar } from "react-bootstrap";
import style from "../../style/Header.module.css";
import Link from "next/link";

interface HeaderProps {
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  return (
    <Navbar
      // bg='transparent'
      data-bs-theme='white'
      className='p-5'
      style={{ backgroundColor: "#F2F2F7" }}>
      <Container className={style.headerContainer}>
        <Link href='/home'>
          <img
            src='/images/lists.svg'
            alt='logoImage'
          />
        </Link>
        <Nav
          className='ms-auto'
          id={style.linkContainer}>
          <Link
            href='/internet'
            className={currentPath === "/internet" ? style.active : ""}>
            <img
              src='/images/internet.svg'
              alt='internetIcon'
            />
          </Link>
          <Link
            href='/home'
            className={currentPath === "/home" ? style.active : ""}>
            <img
              src='/images/listNav.svg'
              alt='ListNavImage'
            />
          </Link>
          <Link
            href='/person'
            className={currentPath === "/person" ? style.active : ""}>
            <img
              src='/images/person.svg'
              alt='personIcon'
            />
          </Link>
          <Link
            href='/notification'
            className={currentPath === "/notification" ? style.active : ""}>
            <img
              src='/images/notifications.svg'
              alt='notificationIcon'
            />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
