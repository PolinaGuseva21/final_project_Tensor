import { ILinkList } from "../../Interfaces/Interfaces";

export const NavBarItem = ({element}: {element: ILinkList}) => {
    return (
        <li>
            <a href={element.link} className="header__menu__text header__menu__padding text">{element.text}</a>
        </li>
    );
};