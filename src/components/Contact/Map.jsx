import '../../css/Contact/Map.css';
import { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from 'react-simple-maps';
import * as mapFeatures from '../../data/features.json';

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
      <ZoomableGroup zoom={counter} center={[9.5746, 57.7089]}>
        <Geographies
          geography={mapFeatures}
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
        <Marker coordinates={[11.9746, 57.7089]} fill='#777'>
          <circle r={0.3} fill={'var(--text-red)'} />
          <text
            x='6.8'
            y='-.5'
            textAnchor='end'
            alignmentBaseline='middle'
            fontSize={'.1rem'}
            fill={'var(--text-red)'}
          >
            {'Gothenburg'}
          </text>
        </Marker>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
