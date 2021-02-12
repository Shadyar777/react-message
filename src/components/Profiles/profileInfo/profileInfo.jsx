import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import proinfoClasse from './profileInfo.module.css';

const ProfileInfo = (props) => {
  if (props.profile == null) {
    return <Preloader />;
  }

  return (
    <div className={proinfoClasse.profileInfo}>
      <img src='https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg' alt='' />
      <div className={proinfoClasse.contentPost}>
        <div className={proinfoClasse.descriptionBlock}>
          <img src={props.profile.photos.large} alt='img' />
         <div> ava + dicrip</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
