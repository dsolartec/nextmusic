import React from 'react';
import { Gesture, createGesture } from '@ionic/react';
import Navigation from '../Navigation';
import './index.scss';

const Header: React.FC = () => {
  const [isActive, setActive] = React.useState<boolean>(false);

  const el = document.getElementById('root');
  if (el) {
    const swipeLeft: Gesture = createGesture({
      el,
      gestureName: 'navigation_swipe',
      onMove: (e) => setActive(e.startX < e.currentX),
    });

    swipeLeft.enable();
  }

  return (
    <>
      <div className="nextmusic-header">
        <div className="header-icon" />
        <div className="header-app-name">NextMusic</div>
        <div
          className={`header-toggle-nav ${isActive ? 'close' : ''}`}
          onClick={() => setActive(!isActive)}
        />
      </div>
      <Navigation active={isActive} onClick={() => setActive(false)} />
    </>
  );
}

export default Header;
