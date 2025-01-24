import { navItems } from '../utils/constants.js';
import NavItem from './NavItem.jsx';

const Navigation = ({ changePage }) => {
  return (
    <nav>
      <ul className='nav fixed-top mt-2 ms-5'>
        {navItems.map((item) => (
          <NavItem itemTitle={item} changePage={changePage} key={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
