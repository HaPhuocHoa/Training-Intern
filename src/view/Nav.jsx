import './nav.scss'
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <div class="topnav">
      <NavLink class="active" to ="/home">
        Home
      </NavLink>
      <NavLink to ="/news">News</NavLink>
      <NavLink to ="/contact">Contact</NavLink>
      <NavLink to ="/about">About</NavLink>
    </div>
  );
};

export default Nav
