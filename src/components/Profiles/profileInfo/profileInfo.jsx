import React from "react";
import proinfoClasse from "./profileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={proinfoClasse.profileInfo}>
      <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" alt="" />
      <div className={proinfoClasse.contentPost}>
        <div className={proinfoClasse.descriptionBlock}> ava + dicrip </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
