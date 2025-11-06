import { Dropdown, Switch } from "antd";
import { ChevronDown, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import styles from "./User.module.css";

function User() {
  const { toggleTheme } = useTheme();
  const { user } = useUser();

  const items = [
    {
      label: <a href={`/user/self/${user.id}`}>Profile</a>,
      key: "0",
    },
    {
      label: <a>Settings</a>,
      key: "1",
    },
    {
      label: (
        <div className={styles.theme}>
          <Moon className={styles.theme_icon} />
          <Switch defaultChecked size="small" onChange={toggleTheme} />
        </div>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: <p>Signout</p>,
      key: "3",
    },
  ];
  return (
    <div className={styles.wrap}>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="right"
        overlayClassName={styles.dpd}
      >
        <div className={styles.dpd_img}>
          <img src="/hammad.png" alt="profile image" />
          <ChevronDown size={16} className={styles.dpd_down} />
        </div>
      </Dropdown>
    </div>
  );
}

export default User;
