import Link from "next/link";
import styles from "./header.module.css";

const menuItems = [
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Header = () => (
  <footer className={styles.menu}>
    <div className={styles.logo}>
      <Link href="/">JTarin</Link>
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
  </footer>
);

export default Header;
