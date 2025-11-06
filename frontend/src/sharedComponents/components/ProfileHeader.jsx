import { Typography } from "antd";
import { Pencil } from "lucide-react";
import { useState } from "react";
import FlexContainer from "../../ui/components/FlexContainer";
import styles from "../styles/ProfileHeader.module.css";

function ProfileHeader({ selfView, editProfile }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <FlexContainer direction="v" className={styles.selfview_container}>
      <div className={styles.p_pic}>
        <div className={styles.p_cover}>
          <img src="/cover.JPG" alt="" />
          {selfView === true ? (
            <span className={styles.edit_p_pic} onClick={editProfile}>
              <Pencil strokeWidth={2} size={20} />
            </span>
          ) : null}
          <div className={styles.p_dp}>
            <img src="/hammad.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.p_details_wrapper}>
        <div className={styles.p_details}>
          <div className={styles.p_personal}>
            <p className={styles.p_name}>
              Hammad Ahmed{" "}
              {selfView === true ? (
                <span
                  size="sm"
                  className={styles.edit_user}
                  onClick={editProfile}
                >
                  <Pencil strokeWidth={1} size={16} />
                </span>
              ) : null}{" "}
            </p>
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
              <span>1000</span>followers
            </p>
            <p>
              {" "}
              <span>500</span>connections
            </p>
          </div>
        </div>
        <div className={styles.p_about}>
          <Typography.Paragraph
            ellipsis={{
              rows: 4,
              expandable: true,
              symbol: "More",
              expanded,
              onExpand: (_, info) => setExpanded(info.expanded),
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            alias velit blanditiis magni cupiditate impedit aut, fuga eligendi
            vero a quibusdam consequuntur laborum architecto rerum sunt amet,
            debitis dolorem. Facere. Quidem fugiat iste quos labore provident
            beatae ipsum, eveniet sequi, nihil, a ex praesentium magnam illo.
            Magnam minus ipsum animi placeat ut necessitatibus enim quibusdam
            illum vitae modi? Iste, ex! Maxime reiciendis tempora amet. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Expedita alias
            velit blanditiis magni cupiditate impedit aut, fuga eligendi vero a
            quibusdam consequuntur laborum architecto rerum sunt amet, debitis
            dolorem. Facere. Quidem fugiat iste quos labore provident beatae
            ipsum, eveniet sequi, nihil, a ex praesentium magnam illo. Magnam
            minus ipsum animi placeat ut necessitatibus enim quibusdam illum
            vitae modi? Iste, ex! Maxime reiciendis tempora amet.
          </Typography.Paragraph>
        </div>
      </div>
    </FlexContainer>
  );
}

export default ProfileHeader;
