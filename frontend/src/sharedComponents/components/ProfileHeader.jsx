import { Pencil, UserRoundPen } from "lucide-react";
import { useRef } from "react";
import Button from "../../ui/components/Button";
import styles from "../styles/ProfileHeader.module.css";

function ProfileHeader({ selfView, editProfile }) {
  return (
    <div className={styles.selfview_header}>
      <div className={styles.p_pic}></div>
      <div className={styles.p_details_wrapper}>
        <div className={styles.p_details}>
          {selfView === true ? (
            <Button
              size="sm"
              className={styles.edit_user}
              onClick={editProfile}
            >
              <Pencil strokeWidth={1} />
            </Button>
          ) : null}
          <div className={styles.p_personal}>
            <p className={styles.p_name}>Hammad Ahmed</p>
            <p className={styles.p_profession}>Software Engineer</p>
          </div>
          <div className={styles.p_loc}>
            <p>
              Berin <span className={styles.p_country}>Germany</span>{" "}
            </p>
            <p className={styles.p_contact}>Contact Info</p>
          </div>
          <div className={styles.p_network}>
            <p>
              {" "}
              <span>1000</span> followers
            </p>
            <p>
              {" "}
              <span>500</span>connections
            </p>
          </div>
        </div>
        <div className={styles.p_about}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            alias velit blanditiis magni cupiditate impedit aut, fuga eligendi
            vero a quibusdam consequuntur laborum architecto rerum sunt amet,
            debitis dolorem. Facere. Quidem fugiat iste quos labore provident
            beatae ipsum, eveniet sequi, nihil, a ex praesentium magnam illo.
            Magnam minus ipsum animi placeat ut necessitatibus enim quibusdam
            illum vitae modi? Iste, ex! Maxime reiciendis tempora amet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
