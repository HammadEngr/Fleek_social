import { Tooltip } from "antd";
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
        <Tooltip title="Feed" arrow={false}>
          <NavLink
            to="/feed"
            className={({ isActive }) =>
              isActive
                ? `${styles.isActive} ${styles.nav_link}`
                : styles.nav_link
            }
          >
            <House size={24} strokeWidth={2} />
          </NavLink>
        </Tooltip>
        <Tooltip title="Followers" arrow={false}>
          <NavLink
            to="/friends"
            className={({ isActive }) =>
              isActive
                ? `${styles.isActive} ${styles.nav_link}`
                : styles.nav_link
            }
          >
            <Users size={24} strokeWidth={2} />
          </NavLink>
        </Tooltip>
        <Tooltip title="Friends" arrow={false}>
          <NavLink
            to="/friends"
            className={({ isActive }) =>
              isActive
                ? `${styles.isActive} ${styles.nav_link}`
                : styles.nav_link
            }
          >
            <Handshake size={24} strokeWidth={2} />
          </NavLink>
        </Tooltip>
        <Tooltip title="Notifications" arrow={false}>
          <NavLink
            to="/friends"
            className={({ isActive }) =>
              isActive
                ? `${styles.isActive} ${styles.nav_link}`
                : styles.nav_link
            }
          >
            <BellRing size={24} strokeWidth={2} />
          </NavLink>
        </Tooltip>
        <User />
      </div>
    </header>
  );
}

export default Header;
