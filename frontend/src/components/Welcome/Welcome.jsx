import { Tooltip } from "antd";
import { Languages, SprayCan } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../../ui/components/Button";
import Signin from "../signin/Signin";
import styles from "./Welcome.module.css";

function Welcome({ lang_data }) {
  const { toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={styles.welcome_wrap}>
      <div className={styles.inner_box}>
        <div className={styles.top_}>
          <p className={styles.fleek_}>Fleek</p>
          <p className={styles.fellas_}>{lang_data.heading}</p>
          <div className={styles.btn_}>
            <Button size="md" onClick={toggleLanguage}>
              <Tooltip
                title={`${lang_data.switch_language_tooltip}`}
                className={styles.tooltip_}
              >
                <Languages strokeWidth={1} />
              </Tooltip>
            </Button>
            <Button size="md" onClick={toggleTheme}>
              <Tooltip title={`${lang_data.switch_color_tooltip}`}>
                <SprayCan strokeWidth={1} />
              </Tooltip>
            </Button>
          </div>
        </div>
        <div className={styles.bottom_}>
          {/* <div className={styles.imgs_}>
            <div className={styles.imgs_box}>
              <div>
                <div className={styles.wimgs_1}>
                  <img src="./welcome/w1.jpg" alt="w1-img" />
                </div>
                <div className={styles.wimgs_2}>
                  <img src="./welcome/w2.jpg" alt="w1-img" />
                </div>
                <div className={styles.wimgs_3}>
                  <img src="./welcome/w3.jpg" alt="w1-img" />
                </div>
              </div>
            </div>
          </div> */}
          <div className={styles.signin_}>
            <Signin lang_data={lang_data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
