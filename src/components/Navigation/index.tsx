import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';

interface NavigationProps {
  active: boolean;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  const location = useLocation();
  const currentPage = location.pathname.split('/')[1];

  return (
    <div className={`nextmusic-navigation ${props.active ? 'active' : ''}`}>
      <div className="navigation-bg" />
      <div className="navigation-top">
        <div className="top-icon" />
        <div className="top-text">NextMusic</div>
      </div>
      <ul className="navigation-items">
        <li><Link to="/" onClick={(e) => props.onClick(e)}>
          <div className="item-icon">
            <svg width="100%" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5833 29.1667V20.4167H20.4167V29.1667H27.7083V17.5H32.0833L17.5 4.375L2.91667 17.5H7.29167V29.1667H14.5833Z"
                fill={currentPage === '' ? '#9C27B0' : '#140516'}
              />
            </svg>
          </div>
          <span>Inicio</span>
        </Link></li>
        <li><Link to="/library" onClick={(e) => props.onClick(e)}>
          <div className="item-icon">
            <svg width="100%" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.875 8.75H4.375V11.6667H21.875V8.75ZM21.875 14.5833H4.375V17.5H21.875V14.5833ZM4.375 23.3333H16.0417V20.4167H4.375V23.3333ZM24.7917 8.75V20.6792C24.3396 20.5188 23.8438 20.4167 23.3333 20.4167C20.9125 20.4167 18.9583 22.3708 18.9583 24.7917C18.9583 27.2125 20.9125 29.1667 23.3333 29.1667C25.7542 29.1667 27.7083 27.2125 27.7083 24.7917V11.6667H32.0833V8.75H24.7917Z"
                fill={currentPage === 'library' ? '#9C27B0' : '#140516'}
              />
            </svg>
          </div>
          <span>Biblioteca</span>  
        </Link></li>
        <li><Link to="/settings" onClick={(e) => props.onClick(e)}>
          <div className="item-icon">
            <svg width="100%" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M27.9125 18.865C27.965 18.4275 28 17.9725 28 17.5C28 17.0275 27.965 16.5725 27.895 16.135L30.8525 13.825C31.115 13.615 31.185 13.23 31.0275 12.9325L28.2275 8.085C28.0525 7.77 27.685 7.665 27.37 7.77L23.8875 9.17C23.1525 8.61 22.3825 8.155 21.525 7.805L21 4.095C20.9475 3.745 20.65 3.5 20.3 3.5H14.7C14.35 3.5 14.07 3.745 14.0175 4.095L13.4925 7.805C12.635 8.155 11.8475 8.6275 11.13 9.17L7.6475 7.77C7.3325 7.6475 6.965 7.77 6.79 8.085L3.99 12.9325C3.815 13.2475 3.885 13.615 4.165 13.825L7.1225 16.135C7.0525 16.5725 7 17.045 7 17.5C7 17.955 7.035 18.4275 7.105 18.865L4.1475 21.175C3.885 21.385 3.815 21.77 3.9725 22.0675L6.7725 26.915C6.9475 27.23 7.315 27.335 7.63 27.23L11.1125 25.83C11.8475 26.39 12.6175 26.845 13.475 27.195L14 30.905C14.07 31.255 14.35 31.5 14.7 31.5H20.3C20.65 31.5 20.9475 31.255 20.9825 30.905L21.5075 27.195C22.365 26.845 23.1525 26.3725 23.87 25.83L27.3525 27.23C27.6675 27.3525 28.035 27.23 28.21 26.915L31.01 22.0675C31.185 21.7525 31.115 21.385 30.835 21.175L27.9125 18.865ZM17.5 22.75C14.6125 22.75 12.25 20.3875 12.25 17.5C12.25 14.6125 14.6125 12.25 17.5 12.25C20.3875 12.25 22.75 14.6125 22.75 17.5C22.75 20.3875 20.3875 22.75 17.5 22.75Z"
                fill={currentPage === 'settings' ? '#9C27B0' : '#140516'}
              />
            </svg>
          </div>
          <span>Ajustes</span>  
        </Link></li>
      </ul>
      <div className="navigation-bottom">
        &copy; 2020 NextMusic by Daniel Solarte
      </div>
    </div>
  );
};

export default Navigation;
