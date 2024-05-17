import Link from "next/link";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/aiimage/texttoimage">文生图</Link>
      <Link href="/aiimage/imagetoimage">图生图</Link>
    </nav>
  );
};

export default Sidebar;
