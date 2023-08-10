
import React, { Fragment } from 'react';
import './style/index.css';
import { Icon } from "@iconify/react";

const Card = ({ description, iconName, className ,isActive, onClick }) => {
    return (
        <div className={`options-card${className}`} onClick={onClick}>
          <Icon className="icons" icon={iconName} />
          <span className={isActive ? 'active' : ''}>{description}</span>
        </div>
      );
};

export default Card
