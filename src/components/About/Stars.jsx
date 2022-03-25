import '../../css/About/Stars.css';
import Particles from 'react-tsparticles';

const options = {
  fpsLimit: 60,
  detectRetina: false,
  particles: {
    number: {
      value: 8,
      density: {
        enable: true,
        value_area: 300,
      },
    },
    color: {
      value: '#08fdfd99',
    },
    opacity: {
      value: 0.8,
    },
    size: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: 4,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: 'none',
      random: false,
      straight: false,
      outModes: {
        default: 'out',
      },
      attract: {
        enable: false,
        rotate: { x: 600, y: 1200 },
      },
      warp: true,
    },
  },
  absorbers: {
    orbits: true,
    destroy: false,
    size: {
      value: 100,
      limit: 100,
      random: false,
      density: 10,
    },
    position: {
      x: 50,
      y: 50,
    },
  },
};

const Stars = () => {
  return <Particles options={options} className='stars' />;
};

export default Stars;
