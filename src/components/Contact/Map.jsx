import '../../css/Contact/Map.css';
import { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const Map = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < 18) {
      setTimeout(() => {
        setCounter((currCounter) => currCounter + 0.1);
      }, 20);
    }
  }, [counter]);

  return (
    <ComposableMap className='map'>
      <ZoomableGroup zoom={counter} center={[-6.844644, 54.183959]}>
        <Geographies
          geography={geoUrl}
          fill='transparent'
          stroke={'var(--bg-green-transparent)'}
          strokeWidth={0.1}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker coordinates={[-2.244644, 53.483959]} fill='#777'>
          <circle r={0.3} fill={'var(--text-red)'} />
          <text
            x='6.8'
            y='-.5'
            textAnchor='end'
            alignmentBaseline='middle'
            fontSize={'.1rem'}
            fill={'var(--text-red)'}
          >
            {'Manchester'}
          </text>
        </Marker>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
