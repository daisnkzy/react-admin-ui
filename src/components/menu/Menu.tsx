import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../../../public/data';
const Menu = () => {
  return (
    <div className="menu">
      {menu.map((items) => (
        <div className="item" key={items.id}>
          <span className="item-name">{items.title}</span>
          {items.listItems.map((item) => (
            <Link to={item.url} className="item-list" key={item.id}>
              <img src={item.icon} alt="" />
              <span className="list-title">{item.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
