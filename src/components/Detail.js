import React from 'react';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="detail-container">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <div className="detail-text">
        <h1 className="detail-title">{name}</h1>
        <p className="detail-description">
          Exercises keep you strong. <span className="detail-name">{name}</span> is one
          of the best exercises to target your {target}. It will help you improve your
          mood and gain energy.
        </p>
        {extraDetail?.map((item, index) => (
          <div key={index} className="detail-extra">
            <div className="detail-icon">
              <img src={item.icon} alt={bodyPart} />
            </div>
            <p className="detail-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
