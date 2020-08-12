import React from 'react';
import Card from '../../components/Card';
import ItemCard from '../../components/ItemCard';

const Library: React.FC = () => {
  return (
    <div className="nextmusic-general">
      <Card title="Canciones más escuchadas">
        <div style={{ overflow: 'auto' }}>
          <div style={{ width: 'calc((120px + .5rem) * 2 + 120px)' }}>
            <ItemCard
              id="rain_on_me"
              thumbnail="/assets/test/rain_on_me.jpg"
              title="Rain on me"
              information="Lady Gaga ft. Ariana Grande"
            />
            <ItemCard
              id="medellin"
              thumbnail="/assets/test/medellin_madonna.jpeg"
              title="Medellín"
              information="Madonna ft. Maluma"
            />
            <ItemCard
              id="amarillo"
              thumbnail="/assets/test/amarillo_jbalvin.jpg"
              title="Amarillo"
              information="J Balvin"
            />
          </div>
        </div>
      </Card>
      <Card title="Agregadas recientemente">
        <div style={{ overflow: 'auto' }}>
          <div style={{ width: 'calc((120px + .5rem) * 2 + 120px)' }}>
            <ItemCard
              id="seven_rings"
              thumbnail="/assets/test/ariana_grande.png"
              title="7 Rings"
              information="Ariana Grande"
            />
            <ItemCard
              id="offset"
              thumbnail="/assets/test/offset_clout.jpg"
              title="Offset"
              information="Cardi B ft. Clout"
            />
            <ItemCard
              id="say_so"
              thumbnail="/assets/test/doja-cat-hot-pink.jpg"
              title="Say So"
              information="Doja Cat"
            />
          </div>
        </div>
      </Card>
      <Card title="Canciones favoritas">
        <div style={{ overflow: 'auto' }}>
          <div style={{ width: 'calc((120px + .5rem) * 2 + 120px)' }}>
            <ItemCard
              id="rain_on_me_1"
              thumbnail="/assets/test/rain_on_me.jpg"
              title="Rain on me"
              information="Lady Gaga ft. Ariana Grande"
            />
            <ItemCard
              id="7_rings_1"
              thumbnail="/assets/test/ariana_grande.png"
              title="7 Rings"
              information="Ariana Grande"
            />
            <ItemCard
              id="colors"
              thumbnail="/assets/test/colors_marshmello.jpeg"
              title="Colors"
              information="Marshmello"
            />
          </div>
        </div>
      </Card>
      <Card title="Listas de reproducción">
        <div style={{ overflow: 'auto' }}>
          <div style={{ width: 'calc((120px + .5rem) * 2 + 120px)' }}>
            <ItemCard
              id="pop"
              thumbnail={[
                '/assets/test/ariana_grande.png',
                '/assets/test/rain_on_me.jpg'
              ]}
              title="Pop"
              information="2 canciones"
            />
            <ItemCard
              id="travel"
              thumbnail={[
                '/assets/test/doja-cat-hot-pink.jpg',
                '/assets/test/k4_dillom_tempera.jpg',
                '/assets/test/offset_clout.jpg'
              ]}
              title="Travel"
              information="5 canciones"
            />
            <ItemCard
              id="friends"
              thumbnail="/assets/test/k4_dillom_tempera.jpg"
              title="Firends"
              information="1 canción"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Library;
