import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <>
      <div className={styles.main}></div>

      <Sidebar />
      <div className="div">Hello World</div>
    </>
  );
}
