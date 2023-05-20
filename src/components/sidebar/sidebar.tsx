import { SideBarLinks } from "@/interfaces/interfaces";
import Link from "next/link";
import style from "./sidebar.module.css";
import Image from "next/image";
import star from "../../../public/assets/svg/star.svg";

const Sidebar = () => {
  const links: Array<SideBarLinks> = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  return (
    <>
      <div className={style.main}>
        <div className={style.logo}>
          {/* <Image src={star} alt={"logo"} /> */}
        </div>

        {links &&
          links.map((e, idx) => {
            return (
              <>
                <Link href={e.path} className={style.link} key={idx}>
                  {e.name}
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Sidebar;
