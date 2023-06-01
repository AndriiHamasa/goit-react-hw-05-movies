import { NavLink } from 'react-router-dom';
import searchFilm from 'components/API/api';
import css from './Header.module.css'

const Header = () => {
  console.log('before')
  searchFilm()
  console.log('after')
  return (
    <ul className={css.mainMenu}>
      <li>
        <NavLink to='/' className={css.menuLink} >Home</NavLink>
      </li>
      <li>
      <NavLink to='/movies' className={css.menuLink}>Movies</NavLink>
      </li>
    </ul>
  );
};

export default Header;
