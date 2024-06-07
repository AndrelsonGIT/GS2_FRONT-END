import React from 'react';
import styles from "./Header.module.css"
import Link from "next/link"

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/"> <h2>Ocean Guardian</h2></Link>
            <ul className={styles.listItems}>
              <Link href="/feedback"><li>DAR feedback</li></Link>
              <Link href="/register"><li>Cadastrar-se</li></Link>
              <Link href="/logIn"><li>LogIn</li></Link>
            </ul>
        </header>
    );
};

export default Header;