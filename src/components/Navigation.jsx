import {navItems} from '../utils/constants.js'
import NavItem from './NavItem.jsx'

const Navigation = () => {
  return (
    <nav>
      <ul className="nav fixed-top mt-2 ms-5">
        {navItems.map((item)=> <NavItem itemTitle={item} key={item}/>)}
        {/*<NavItem itemTitle={'Home'}/>*/}
        {/*<NavItem itemTitle={'About me'}/>*/}
        {/*<NavItem itemTitle={'Star Wars'}/>*/}
        {/*<NavItem itemTitle={'Contact'}/>*/}
      </ul>
    </nav>
  );
};

export default Navigation;
