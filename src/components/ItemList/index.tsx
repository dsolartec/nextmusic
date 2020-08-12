import React from 'react';
import './index.scss';

interface ItemListProps {
  thumbnail: string;
  title: string;
  artists: string;
}

const ItemList: React.FC<ItemListProps> = (props: ItemListProps) => {
  return (
    <div className="nextmusic-item-list">
      <div className="item-thumbnail" style={{ backgroundImage: `url('${props.thumbnail}')` }} />
      <div className="item-info">
        <p>{props.title}</p>
        <span>{props.artists}</span>
      </div>
      <div className="item-more" />
    </div>
  );
}

export default ItemList;
