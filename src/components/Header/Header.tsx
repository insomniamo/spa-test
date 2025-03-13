import { useState } from "react";
import './Header.style.scss';
import Button from '@components/Button/Button';
import Modal from "../Modal/Modal";
import { BurgerIcon } from '@/icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='header'>
      <Button style={["icon"]} onClickEvent={() => setIsOpen(true)}>
        <BurgerIcon/>
      </Button>
      <h1>BESIDER</h1>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </header>
  );
}

export default Header;
