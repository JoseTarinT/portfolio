import Link from "next/link";
import styles from "./header.module.css";
import { ThemeToggle } from "./themeToggle";
import Image from "next/image";
import JTLogo from "../../public/JTLogo";

const menuItems = [
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Header = () => (
  <header className={styles.menu}>
    <div className={styles.logoContainer}>
      <Link href="/">
        <div>
          <JTLogo className={styles.logo} />
        </div>
      </Link>
    </div>
    <nav className={styles.navigation}>
      <ul className={styles.menuOptions}>
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.path} className={styles.menuButtons}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <div>
      <ThemeToggle />
    </div>
  </header>
);

export default Header;
