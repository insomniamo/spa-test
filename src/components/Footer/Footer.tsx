import "./Footer.style.scss"
import { useSelector } from 'react-redux';
import { RootState } from '@utils/redux/store';
import logo from '@/images/logoimage.png'
import LinksList from '@components/LinksList/LinksList'
import Loader from '../Loader/Loader';

function Footer() {
  const {loading, error } = useSelector((state: RootState) => state.news);
  return (

    <footer className='footer'>
      {loading && <Loader/>}
      {error && <p>Ошибка: {error}</p>}
      <footer className='footer__wrapper'>
        <LinksList/>
        <div className='footer__logo'>
          <span className='footer__logo-text'>Powered by</span>
          <img className='footer__logo-image' src={logo} alt="" />
        </div>
        <span className='footer__copyright'>© 2023 Besider. Inspired by Insider</span>
      </footer>
    </footer>
  )
}

export default Footer
