import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to={"/"} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdHomeFilled />ACCUEIL</div></NavLink>
      <NavLink to={"/mens"} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdCategory />MASQUES</div></NavLink>
      <NavLink to={"/womens"} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdShop2 />BIJOUX</div></NavLink>
      <NavLink to={"/kids"} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdContacts />HABIERS</div></NavLink>
      <NavLink to={"/haussure"} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdContacts />HAussure</div></NavLink>
        </nav>
  );
};

export default Navbar;
