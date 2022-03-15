import '../../css/Nav/Logo.css';
import logo from '../../images/logo.png';

const Logo = () => {
  return (
    <section class='logo--container'>
      <div id='shape' class='cube backfaces'>
        <div class='plane one'></div>
        <div class='plane two'></div>
        <div class='plane three'></div>
        <div class='plane four'></div>
        <div class='plane five'></div>
        <div class='plane six'></div>
        <div class='plane seven'></div>
        <div class='plane eight'>
          <img src={logo} alt='Logo' />
        </div>
        <div class='plane nine'>
          <img src={logo} alt='Logo' />
        </div>
        <div class='plane ten'>
          <img src={logo} alt='Logo' />
        </div>
        <div class='plane eleven'>
          <img src={logo} alt='Logo' />
        </div>
        <div class='plane twelve'></div>
      </div>
    </section>
  );
};

export default Logo;
