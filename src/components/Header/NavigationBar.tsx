import { navBarItems } from "../../ConstData/ConstData";
import { NavBarItem } from "./NavBarItem";

export const NavigationBar = () => {
    return (
        <nav>
          <ul className="header__menu">
            <li><a href="/search" >
              <div className="header__menu__search">
              </div>
              </a>
            </li>
            { navBarItems.map((item) => 
                <NavBarItem element={item} key={item.id}/>
            )}
            <li className="header__menu__text header__menu__padding text">•</li>
            <li><a className="header__menu__text header__menu__padding text" href="https://www.last.fm/login">Log in</a></li>
            <li className="header__menu__text header__menu__padding"><button className="header__button">SIGN UP</button></li>
          </ul>
        </nav>
    );
};