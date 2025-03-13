import './Modal.style.scss';
import Container from '@components/Container/Container';
import Button from '@components/Button/Button';
import { CloseIcon } from '@/icons';

interface ModalProps {
  onClose: () => void;
}

function Modal({ onClose }: ModalProps) {
  return (
    <div className='modal'>
      <Container>
        <div className='modal__column'>
          <div className='modal__row'>
            <Button style={["icon"]} onClickEvent={onClose}>
              <CloseIcon />
            </Button>
          </div>

          <nav className='modal__menu'>
            <a className='modal__link' href="#">SCIENCE</a>
            <a className='modal__link' href="#">GENERAL</a>
            <a className='modal__link' href="#">ENTERTAINMENT</a>
            <a className='modal__link' href="#">TECHNOLOGY</a>
            <a className='modal__link' href="#">BUSINESS</a>
            <a className='modal__link' href="#">HEALTH</a>
            <a className='modal__link' href="#">SPORTS</a>
          </nav>
        </div>
      </Container>
    </div>
  );
}

export default Modal;
