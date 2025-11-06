import { BellRing, Handshake, House, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import User from "../User/User";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header_cl}>
      <div className={styles.left}>
        <NavLink to="/">
          <p>Fleek</p>
        </NavLink>
      </div>
      <div className={styles.mid}>
        <ul>
          <li className={styles.header_li}>
            <NavLink
              to="/feed"
              className={({ isActive }) =>
                isActive
                  ? `${styles.isActive} ${styles.nav_link}`
                  : styles.nav_link
              }
            >
              <House size={24} strokeWidth={2} />
              <p>Home</p>
            </NavLink>
          </li>
          <li className={styles.header_li}>
            <NavLink
              to="/friends"
              className={({ isActive }) =>
                isActive
                  ? `${styles.isActive} ${styles.nav_link}`
                  : styles.nav_link
              }
            >
              <Users size={24} strokeWidth={2} />
              <p>Network</p>
            </NavLink>
          </li>
          <li className={styles.header_li}>
            <NavLink
              to="/friends"
              className={({ isActive }) =>
                isActive
                  ? `${styles.isActive} ${styles.nav_link}`
                  : styles.nav_link
              }
            >
              <Handshake size={24} strokeWidth={2} />
              <p>Followers</p>
            </NavLink>
          </li>
          <li className={styles.header_li}>
            <NavLink
              to="/friends"
              className={({ isActive }) =>
                isActive
                  ? `${styles.isActive} ${styles.nav_link}`
                  : styles.nav_link
              }
            >
              <BellRing size={24} strokeWidth={2} />
              <p>Notifications</p>
            </NavLink>
          </li>
        </ul>
        <User />
      </div>
    </header>
  );
}

export default Header;
