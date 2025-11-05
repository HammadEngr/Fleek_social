import { Dropdown, Switch } from "antd";
import { Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./User.module.css";
import { useUser } from "../../contexts/UserContext";

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
        overlayClassName={styles.dpd}
      >
        <a onClick={(e) => e.preventDefault()}>Me</a>
      </Dropdown>
    </div>
  );
}

export default User;
