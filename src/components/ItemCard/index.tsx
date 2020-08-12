import React from 'react';
import './index.scss';

interface ItemCardProps {
  id: string;
  thumbnail: string | Array<string>;
  title: string;
  information: string;
}

const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) => {
  let thumbnails: Array<string> = [];
  if (typeof props.thumbnail === 'object') {
    thumbnails = props.thumbnail;
  } else {
    thumbnails = [props.thumbnail];
  }

  return (
    <div className="nextmusic-item-card">
      <div className={`item-thumbnails count-${thumbnails.length}`}>
        {thumbnails.map((thumbnail, i) => (
          <div
            key={`thumbnail_${props.id}_${i + 1}`}
            className="thumbnail"
            style={{ backgroundImage: `url('${thumbnail}')` }}
          />
        ))}
      </div>
      <div className="item-more" />
      <div className="item-info">
        <p>{props.title}</p>
        <span>{props.information.slice(0, 16)}{props.information.length > 16 && '...'}</span>
      </div>
    </div>
  );
};

export default ItemCard;
