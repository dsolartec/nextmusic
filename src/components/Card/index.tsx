import React from 'react';
import './index.scss';

interface CardProps {
  title: string;
}

const Card: React.FC<React.PropsWithChildren<CardProps>> = (props: React.PropsWithChildren<CardProps>) => {
  return (
    <div className="nextmusic-card">
      <div className="card-title">
        {props.title}
      </div>
      <div className="card-content">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
