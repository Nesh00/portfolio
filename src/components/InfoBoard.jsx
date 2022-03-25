import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import '../css/InfoBoard.css';

const InfoBoard = ({ info }) => {
  return (
    <section className='info-board'>
      <FontAwesomeIcon
        icon={faArrowDownLong}
        size='5x'
        className='info-boar__icon'
      />
      <p className='info-board__message'>{info}</p>
    </section>
  );
};

export default InfoBoard;
