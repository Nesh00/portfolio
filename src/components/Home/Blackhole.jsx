import Particles from 'react-tsparticles';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import '../../css/Home/Blackhole.css';

const Blackhole = () => {
  const { width } = useWindowDimensions();

  const options = {
    fpsLimit: 100,
    detectRetina: true,
    particles: {
      color: {
        value: '#08fdfd99',
      },
      lineLinked: {
        enable: false,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: 'circle',
      },
      size: {
        random: {
          enable: true,
          minimumValue: 0.5,
        },
        value: 2,
      },
      move: {
        size: true,
        enable: true,
        speed: 0.2,
        direction: 'left',
        random: false,
        straight: false,
        outModes: {
          default: 'out',
        },
        attract: {
          enable: false,
          rotate: { x: 600, y: 1200 },
        },
        trail: {
          enable: true,
          length: 10,
        },
        warp: true,
      },
    },
    absorbers: {
      orbits: true,
      destroy: true,
      opacity: 0.5,
      size: {
        value: width < 1024 ? 50 : 65,
        random: false,
        density: 2000,
      },
      position: {
        x: width <= 768 ? 50 : 80,
        y: 50,
      },
    },
  };

  return (
    <section className='bg-blackhole'>
      <div className='blackhole'></div>
      <Particles className='particles' options={options} />
    </section>
  );
};

export default Blackhole;
