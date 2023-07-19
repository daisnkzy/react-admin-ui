import { IoIosNotificationsOutline } from 'react-icons/io';
import './header.scss';
import { IconContext } from 'react-icons';
const Header = () => {
  return (
    <div className="header">
      <a className="logo" href="#">
        <img src="logo.svg" alt="logo" />
        <span>Taosir</span>
      </a>

      <nav className="navbar">
        <a className="notification" href="#">
          <IconContext.Provider value={{ size: '2rem' }}>
            <IoIosNotificationsOutline />
          </IconContext.Provider>
          <span>1</span>
        </a>
        <a className="user" href="#">
          <img src="noavatar.png" alt="user_img" />
          <span>taosir</span>
        </a>
      </nav>
    </div>
  );
};

export default Header;
