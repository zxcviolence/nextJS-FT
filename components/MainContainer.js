import Head from "next/head";
import A from "../components/A";
import styles from "../styles/Nav.module.css";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextJS, firstTouch " + keywords}></meta>
        <title>NextJS</title>
      </Head>
      <div className={styles.navbar}>
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
        <A href="/picture" text="Картинка" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
