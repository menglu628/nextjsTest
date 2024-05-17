import Head from "next/head";
import styles from "./layout1.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout1 = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Layout1 Demo</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout1;
