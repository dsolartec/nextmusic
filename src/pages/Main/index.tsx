import React from 'react';
import Card from '../../components/Card';
import ItemCard from '../../components/ItemCard';
import ItemList from '../../components/ItemList';
import './index.scss';

const Main: React.FC = () => {
  return (
    <div className="nextmusic-general">
      <Card title="Canciones más escuchadas">
        <div style={{ overflow: 'auto' }}>
          <div style={{ width: 'calc((120px + .5rem) * 2 + 120px)' }}>
            <ItemCard id="rain_on_me" thumbnail="/assets/test/rain_on_me.jpg" title="Rain on me" information="Lady Gaga ft. Ariana Grande" />
            <ItemCard id="medellin" thumbnail="/assets/test/medellin_madonna.jpeg" title="Medellín" information="Madonna ft. Maluma" />
            <ItemCard id="amarillo" thumbnail="/assets/test/amarillo_jbalvin.jpg" title="Amarillo" information="J Balvin" />
          </div>
        </div>
      </Card>
      <Card title="Todas las canciones (2005)">
        <div className="all-songs-content">
          <div className="songs">
            <ItemList thumbnail="/assets/test/ariana_grande.png" title="7 Rings" artists="Ariana Grande" />
            <ItemList thumbnail="/assets/test/offset_clout.jpg" title="Offset" artists="Cardi B ft. Clout" />
            <ItemList thumbnail="/assets/test/doja-cat-hot-pink.jpg" title="Say So" artists="Doja Cat" />
            <ItemList thumbnail="/assets/test/colors_marshmello.jpeg" title="Colors" artists="Marshmello" />
            <ItemList thumbnail="/assets/test/k4_dillom_tempera.jpg" title="k4" artists="Témpera ft. Dillom & Kid Mess" />
            <ItemList thumbnail="/assets/test/amarillo_jbalvin.jpg" title="Amarillo" artists="J Balvin" />
            <ItemList thumbnail="/assets/test/rain_on_me.jpg" title="Rain on me" artists="Lady Gaga ft. Ariana Grande" />
            <ItemList thumbnail="/assets/test/medellin_madonna.jpeg" title="Medellín" artists="Madona ft. Maluma" />
          </div>
          <ul className="letters">
            <li className="active">#</li>
            {[...Array(26)].map((_, i) => (
              <li key={`letter_${i + 1}`}>{String.fromCharCode(i + 65)}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default Main;
