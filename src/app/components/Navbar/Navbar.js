import Link from "next/link";
import styles from "./Navbar.module.css";
import { Home } from "lucide-react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Link href="/" className={styles.link}>
            <Home size={24} />
        </Link>
    </nav>
  );
}